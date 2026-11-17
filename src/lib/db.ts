import Database from 'better-sqlite3';
import path from 'path';
import fs from 'fs';

const dataDir = path.join(process.cwd(), 'data');
if (!fs.existsSync(dataDir)) {
  fs.mkdirSync(dataDir, { recursive: true });
}

const dbPath = path.join(dataDir, 'crm.db');
const db = new Database(dbPath);

// Enable WAL mode for high concurrency
db.pragma('journal_mode = WAL');

// Initialize Tables
db.exec(`
  CREATE TABLE IF NOT EXISTS tracking_events (
    id INTEGER PRIMARY KEY AUTOINCREMENT,
    event_type TEXT NOT NULL,
    source_page TEXT NOT NULL,
    button_location TEXT,
    intent_tag TEXT,
    device TEXT,
    referrer TEXT,
    created_at TEXT NOT NULL
  );

  CREATE TABLE IF NOT EXISTS leads (
    id INTEGER PRIMARY KEY AUTOINCREMENT,
    channel TEXT NOT NULL,
    name TEXT,
    phone TEXT,
    email TEXT,
    organization TEXT,
    area TEXT,
    plan_interest TEXT,
    status TEXT DEFAULT 'new',
    notes TEXT,
    next_followup TEXT,
    created_at TEXT NOT NULL,
    updated_at TEXT NOT NULL
  );

  CREATE TABLE IF NOT EXISTS admin_users (
    id INTEGER PRIMARY KEY AUTOINCREMENT,
    username TEXT UNIQUE NOT NULL,
    password_hash TEXT NOT NULL,
    name TEXT NOT NULL,
    created_at TEXT NOT NULL
  );

  CREATE TABLE IF NOT EXISTS daily_menu_overrides (
    date TEXT PRIMARY KEY,
    breakfast_title TEXT,
    lunch_veg_main TEXT,
    lunch_nonveg_main TEXT,
    dinner_main TEXT,
    is_sold_out INTEGER DEFAULT 0,
    updated_at TEXT NOT NULL
  );
`);

export interface TrackingEventRecord {
  id?: number;
  event_type: 'whatsapp_click' | 'phone_call' | 'form_submission' | 'menu_pdf_download';
  source_page: string;
  button_location?: string;
  intent_tag?: string;
  device?: string;
  referrer?: string;
  created_at?: string;
}

export interface LeadRecord {
  id?: number;
  channel: string;
  name?: string;
  phone?: string;
  email?: string;
  organization?: string;
  area?: string;
  plan_interest?: string;
  status: 'new' | 'contacted' | 'menu_sent' | 'trial_active' | 'subscribed' | 'lost';
  notes?: string;
  next_followup?: string;
  created_at?: string;
  updated_at?: string;
}

export const dbService = {
  // Tracking Events
  logEvent(event: TrackingEventRecord) {
    const stmt = db.prepare(`
      INSERT INTO tracking_events (event_type, source_page, button_location, intent_tag, device, referrer, created_at)
      VALUES (?, ?, ?, ?, ?, ?, ?)
    `);
    return stmt.run(
      event.event_type,
      event.source_page,
      event.button_location || '',
      event.intent_tag || '',
      event.device || 'desktop',
      event.referrer || '',
      event.created_at || new Date().toISOString()
    );
  },

  getRecentEvents(limit = 100): TrackingEventRecord[] {
    return db
      .prepare('SELECT * FROM tracking_events ORDER BY id DESC LIMIT ?')
      .all(limit) as TrackingEventRecord[];
  },

  getEventStats() {
    const totalEvents = db.prepare('SELECT COUNT(*) as count FROM tracking_events').get() as { count: number };
    const whatsappClicks = db.prepare("SELECT COUNT(*) as count FROM tracking_events WHERE event_type = 'whatsapp_click'").get() as { count: number };
    const phoneCalls = db.prepare("SELECT COUNT(*) as count FROM tracking_events WHERE event_type = 'phone_call'").get() as { count: number };
    const formSubmissions = db.prepare("SELECT COUNT(*) as count FROM tracking_events WHERE event_type = 'form_submission'").get() as { count: number };
    const byPage = db.prepare(`
      SELECT source_page, COUNT(*) as count 
      FROM tracking_events 
      GROUP BY source_page 
      ORDER BY count DESC 
      LIMIT 6
    `).all() as Array<{ source_page: string; count: number }>;

    return {
      total: totalEvents.count,
      whatsapp: whatsappClicks.count,
      calls: phoneCalls.count,
      forms: formSubmissions.count,
      byPage,
    };
  },

  // Leads
  createLead(lead: Omit<LeadRecord, 'id' | 'created_at' | 'updated_at'>) {
    const now = new Date().toISOString();
    const stmt = db.prepare(`
      INSERT INTO leads (channel, name, phone, email, organization, area, plan_interest, status, notes, next_followup, created_at, updated_at)
      VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?)
    `);
    const info = stmt.run(
      lead.channel,
      lead.name || 'Anonymous Inquiry',
      lead.phone || '',
      lead.email || '',
      lead.organization || '',
      lead.area || '',
      lead.plan_interest || 'General Plan',
      lead.status || 'new',
      lead.notes || '',
      lead.next_followup || '',
      now,
      now
    );
    return info.lastInsertRowid;
  },

  getAllLeads(status?: string): LeadRecord[] {
    if (status && status !== 'all') {
      return db
        .prepare('SELECT * FROM leads WHERE status = ? ORDER BY id DESC')
        .all(status) as LeadRecord[];
    }
    return db.prepare('SELECT * FROM leads ORDER BY id DESC').all() as LeadRecord[];
  },

  updateLeadStatus(id: number, status: string, notes?: string, nextFollowup?: string) {
    const now = new Date().toISOString();
    if (notes !== undefined && nextFollowup !== undefined) {
      return db.prepare(`
        UPDATE leads 
        SET status = ?, notes = ?, next_followup = ?, updated_at = ? 
        WHERE id = ?
      `).run(status, notes, nextFollowup, now, id);
    }
    return db.prepare('UPDATE leads SET status = ?, updated_at = ? WHERE id = ?').run(status, now, id);
  },

  deleteLead(id: number) {
    return db.prepare('DELETE FROM leads WHERE id = ?').run(id);
  },

  getLeadStats() {
    const total = db.prepare('SELECT COUNT(*) as count FROM leads').get() as { count: number };
    const newLeads = db.prepare("SELECT COUNT(*) as count FROM leads WHERE status = 'new'").get() as { count: number };
    const contacted = db.prepare("SELECT COUNT(*) as count FROM leads WHERE status = 'contacted'").get() as { count: number };
    const subscribed = db.prepare("SELECT COUNT(*) as count FROM leads WHERE status = 'subscribed'").get() as { count: number };
    const lost = db.prepare("SELECT COUNT(*) as count FROM leads WHERE status = 'lost'").get() as { count: number };

    return {
      total: total.count,
      new: newLeads.count,
      contacted: contacted.count,
      subscribed: subscribed.count,
      lost: lost.count,
    };
  },
};

export default db;

