'use client';

import { useState, useEffect, useCallback } from 'react';
import { useRouter } from 'next/navigation';
import {
  Phone,
  Mail,
  Loader2,
  RefreshCw,
  LogOut,
  ExternalLink,
  Trash2,
  Clock,
  Search,
  TrendingUp,
  Users,
  FileText,
  Utensils,
  Layers,
  Building2,
  MapPin,
  Calendar,
  MessageCircle,
} from 'lucide-react';

interface Lead {
  id: number;
  channel: string;
  name: string;
  phone: string;
  email?: string;
  organization?: string;
  area?: string;
  plan_interest?: string;
  status: 'new' | 'contacted' | 'menu_sent' | 'trial_active' | 'subscribed' | 'lost';
  notes?: string;
  next_followup?: string;
  created_at: string;
  updated_at: string;
}

interface EventStats {
  total: number;
  whatsapp: number;
  calls: number;
  forms: number;
  byPage: Array<{ source_page: string; count: number }>;
}

interface LeadStats {
  total: number;
  new: number;
  contacted: number;
  subscribed: number;
  lost: number;
}

interface RecentEvent {
  id: number;
  event_type: string;
  source_page: string;
  button_location?: string;
  intent_tag?: string;
  device?: string;
  created_at: string;
}

const STATUS_OPTIONS: Array<{ value: Lead['status']; label: string; color: string }> = [
  { value: 'new', label: 'New Lead', color: 'bg-amber-500/10 text-amber-400 border-amber-500/30' },
  { value: 'contacted', label: 'Contacted', color: 'bg-[#C59B27]/15 text-[#F3CF7A] border-[#C59B27]/40' },
  { value: 'menu_sent', label: 'Menu Sent', color: 'bg-purple-500/10 text-purple-400 border-purple-500/30' },
  { value: 'trial_active', label: 'Trial Active', color: 'bg-cyan-500/10 text-cyan-400 border-cyan-500/30' },
  { value: 'subscribed', label: 'Subscribed', color: 'bg-emerald-500/10 text-emerald-400 border-emerald-500/30' },
  { value: 'lost', label: 'Archived / Lost', color: 'bg-stone-500/10 text-stone-400 border-stone-500/30' },
];

export default function AdminDashboardPage() {
  const router = useRouter();
  const [loading, setLoading] = useState(true);
  const [leads, setLeads] = useState<Lead[]>([]);
  const [stats, setStats] = useState<LeadStats | null>(null);
  const [eventStats, setEventStats] = useState<EventStats | null>(null);
  const [recentEvents, setRecentEvents] = useState<RecentEvent[]>([]);
  const [activeTab, setActiveTab] = useState<string>('all');
  const [searchQuery, setSearchQuery] = useState('');
  const [updatingId, setUpdatingId] = useState<number | null>(null);
  const [editingNotesId, setEditingNotesId] = useState<number | null>(null);
  const [noteDraft, setNoteDraft] = useState('');

  const fetchDashboardData = useCallback(async () => {
    try {
      setLoading(true);
      const [leadsRes, analyticsRes] = await Promise.all([
        fetch(`/api/admin/leads?status=${activeTab}`),
        fetch('/api/admin/analytics'),
      ]);

      if (leadsRes.status === 401 || analyticsRes.status === 401) {
        router.push('/admin/login');
        return;
      }

      const leadsData = await leadsRes.json();
      const analyticsData = await analyticsRes.json();

      setLeads(leadsData.leads || []);
      setStats(leadsData.stats || null);
      setEventStats(analyticsData.eventStats || null);
      setRecentEvents(analyticsData.recentEvents || []);
    } catch (err) {
      console.error('Failed to load dashboard:', err);
    } finally {
      setLoading(false);
    }
  }, [activeTab, router]);

  useEffect(() => {
    fetchDashboardData();
  }, [fetchDashboardData]);

  const handleStatusChange = async (id: number, nextStatus: string) => {
    setUpdatingId(id);
    try {
      const res = await fetch(`/api/admin/leads/${id}`, {
        method: 'PATCH',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ status: nextStatus }),
      });

      if (!res.ok) throw new Error('Failed to update status');

      setLeads((prev) =>
        prev.map((lead) => (lead.id === id ? { ...lead, status: nextStatus as Lead['status'] } : lead))
      );
      if (stats) {
        setStats((prev) => (prev ? { ...prev } : null));
      }
    } catch (err) {
      console.error(err);
      alert('Could not update status. Please retry.');
    } finally {
      setUpdatingId(null);
    }
  };

  const handleSaveNotes = async (id: number) => {
    setUpdatingId(id);
    try {
      const res = await fetch(`/api/admin/leads/${id}`, {
        method: 'PATCH',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ notes: noteDraft }),
      });

      if (!res.ok) throw new Error('Failed to save notes');

      setLeads((prev) =>
        prev.map((lead) => (lead.id === id ? { ...lead, notes: noteDraft } : lead))
      );
      setEditingNotesId(null);
    } catch (err) {
      console.error(err);
      alert('Could not save note. Please retry.');
    } finally {
      setUpdatingId(null);
    }
  };

  const handleDeleteLead = async (id: number) => {
    if (!confirm('Are you sure you want to permanently delete this lead?')) return;

    setUpdatingId(id);
    try {
      const res = await fetch(`/api/admin/leads/${id}`, { method: 'DELETE' });
      if (!res.ok) throw new Error('Failed to delete lead');

      setLeads((prev) => prev.filter((l) => l.id !== id));
    } catch (err) {
      console.error(err);
      alert('Could not delete lead. Please retry.');
    } finally {
      setUpdatingId(null);
    }
  };

  const handleLogout = async () => {
    await fetch('/api/admin/login', { method: 'DELETE' });
    router.push('/admin/login');
  };

  const filteredLeads = leads.filter((lead) => {
    if (!searchQuery.trim()) return true;
    const q = searchQuery.toLowerCase();
    return (
      lead.name?.toLowerCase().includes(q) ||
      lead.phone?.toLowerCase().includes(q) ||
      lead.organization?.toLowerCase().includes(q) ||
      lead.area?.toLowerCase().includes(q) ||
      lead.plan_interest?.toLowerCase().includes(q)
    );
  });

  return (
    <div className="min-h-screen bg-[#07170C] text-white antialiased">
      {/* Top Navigation Bar */}
      <header className="sticky top-0 z-30 border-b border-[#C59B27]/30 bg-[#0F2B18]/95 backdrop-blur-md px-4 sm:px-8 py-3.5">
        <div className="mx-auto flex max-w-7xl items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="flex size-9 items-center justify-center rounded-xl bg-[#C59B27] text-[#07170C] font-bold shadow-xs">
              <Utensils className="size-4" />
            </div>
            <div>
              <div className="flex items-center gap-2">
                <span className="font-display font-bold text-white text-base tracking-tight">
                  Student&apos;s Mess Ranchi
                </span>
                <span className="inline-flex items-center gap-1.5 px-2 py-0.5 rounded-full bg-[#C59B27]/20 text-[#F3CF7A] border border-[#C59B27]/40 text-[10px] font-semibold uppercase tracking-wider">
                  <span className="size-1.5 rounded-full bg-[#F3CF7A] animate-pulse" />
                  Live CRM
                </span>
              </div>
              <p className="text-[11px] text-white/70">
                Conversion Telemetry &amp; Lead Pipeline
              </p>
            </div>
          </div>

          <div className="flex items-center gap-2 sm:gap-3">
            <button
              type="button"
              onClick={() => fetchDashboardData()}
              disabled={loading}
              className="inline-flex items-center gap-1.5 rounded-xl border border-white/20 bg-white/10 px-3 py-2 text-xs font-semibold text-white hover:bg-white/20 transition-colors cursor-pointer"
              title="Refresh Data"
            >
              <RefreshCw className={`size-3.5 ${loading ? 'animate-spin text-[#F3CF7A]' : ''}`} />
              <span className="hidden sm:inline">Refresh</span>
            </button>

            <a
              href="/"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1.5 rounded-xl border border-[#C59B27]/40 bg-[#C59B27]/20 px-3 py-2 text-xs font-semibold text-[#F3CF7A] hover:bg-[#C59B27]/30 transition-colors"
            >
              <span className="hidden sm:inline">Public Website</span>
              <ExternalLink className="size-3" />
            </a>

            <button
              type="button"
              onClick={handleLogout}
              className="inline-flex items-center gap-1.5 rounded-xl border border-rose-500/30 bg-rose-950/40 px-3 py-2 text-xs font-semibold text-rose-300 hover:bg-rose-900/50 transition-colors cursor-pointer"
              title="Sign Out"
            >
              <LogOut className="size-3.5" />
              <span className="hidden sm:inline">Sign Out</span>
            </button>
          </div>
        </div>
      </header>

      {/* Main Workspace */}
      <main className="mx-auto max-w-7xl px-4 sm:px-8 py-8 space-y-8">
        {/* KPI Telemetry Row */}
        <section className="grid grid-cols-2 lg:grid-cols-4 gap-4">
          {/* Card 1: WhatsApp Clicks */}
          <div className="rounded-2xl border border-[#C59B27]/30 bg-[#0F2B18] p-5 shadow-sm">
            <div className="flex items-center justify-between mb-3">
              <span className="text-xs uppercase tracking-wider font-bold text-[#F3CF7A]">
                WhatsApp Orders
              </span>
              <span className="flex size-8 items-center justify-center rounded-lg bg-white/10 text-[#F3CF7A] text-sm">
                <MessageCircle className="size-4" />
              </span>
            </div>
            <div className="text-2xl sm:text-3xl font-display font-bold text-white">
              {eventStats ? eventStats.whatsapp : '—'}
            </div>
            <p className="text-[11px] text-white/70 mt-1">
              Direct chat taps from buttons &amp; dock
            </p>
          </div>

          {/* Card 2: Phone Calls */}
          <div className="rounded-2xl border border-[#C59B27]/30 bg-[#0F2B18] p-5 shadow-sm">
            <div className="flex items-center justify-between mb-3">
              <span className="text-xs uppercase tracking-wider font-bold text-[#F3CF7A]">
                Direct Phone Calls
              </span>
              <span className="flex size-8 items-center justify-center rounded-lg bg-white/10 text-[#F3CF7A] text-sm">
                <Phone className="size-4" />
              </span>
            </div>
            <div className="text-2xl sm:text-3xl font-display font-bold text-white">
              {eventStats ? eventStats.calls : '—'}
            </div>
            <p className="text-[11px] text-white/70 mt-1">
              High-intent mobile &amp; header dials
            </p>
          </div>

          {/* Card 3: Form Submissions */}
          <div className="rounded-2xl border border-[#C59B27]/30 bg-[#0F2B18] p-5 shadow-sm">
            <div className="flex items-center justify-between mb-3">
              <span className="text-xs uppercase tracking-wider font-bold text-[#F3CF7A]">
                Callback &amp; RFQ Forms
              </span>
              <span className="flex size-8 items-center justify-center rounded-lg bg-white/10 text-[#F3CF7A] text-sm">
                <FileText className="size-4" />
              </span>
            </div>
            <div className="text-2xl sm:text-3xl font-display font-bold text-white">
              {eventStats ? eventStats.forms : '—'}
            </div>
            <p className="text-[11px] text-white/70 mt-1">
              Zero-drop non-WhatsApp inquiries
            </p>
          </div>

          {/* Card 4: Leads Total */}
          <div className="rounded-2xl border border-[#C59B27]/30 bg-[#0F2B18] p-5 shadow-sm">
            <div className="flex items-center justify-between mb-3">
              <span className="text-xs uppercase tracking-wider font-bold text-[#F3CF7A]">
                Total Pipeline Leads
              </span>
              <span className="flex size-8 items-center justify-center rounded-lg bg-white/10 text-[#F3CF7A] text-sm">
                <Users className="size-4" />
              </span>
            </div>
            <div className="text-2xl sm:text-3xl font-display font-bold text-white">
              {stats ? stats.total : '—'}
            </div>
            <div className="flex items-center gap-2 mt-1">
              <span className="text-[11px] text-[#A3D9B8] font-bold">
                {stats?.subscribed || 0} Subscribed
              </span>
              <span className="text-[11px] text-white/40">•</span>
              <span className="text-[11px] text-[#F3CF7A] font-bold">
                {stats?.new || 0} New
              </span>
            </div>
          </div>
        </section>

        {/* Lead Pipeline & Management */}
        <section className="rounded-2xl border border-[#C59B27]/30 bg-[#0F2B18] p-5 sm:p-7 shadow-xl space-y-6">
          {/* Header + Tabs + Search */}
          <div className="flex flex-col gap-4 md:flex-row md:items-center md:justify-between border-b border-white/10 pb-5">
            <div>
              <h2 className="text-lg sm:text-xl font-display font-bold text-white flex items-center gap-2.5">
                <Layers className="size-5 text-[#F3CF7A]" />
                <span>Customer Inquiry Pipeline</span>
              </h2>
              <p className="text-xs text-white/70 mt-0.5">
                All high-intent calls, WhatsApp clicks, and form submissions automatically captured
              </p>
            </div>

            {/* Search Input */}
            <div className="relative min-w-[260px]">
              <span className="absolute inset-y-0 left-0 flex items-center pl-3 text-white/40 pointer-events-none">
                <Search className="size-3.5" />
              </span>
              <input
                type="text"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                placeholder="Search name, phone, plan..."
                className="w-full rounded-xl border border-white/20 bg-[#07170C]/80 pl-9 pr-3 py-2 text-xs text-white placeholder-white/40 focus:border-[#C59B27] focus:outline-none"
              />
            </div>
          </div>

          {/* Filter Status Tabs */}
          <div className="flex flex-wrap items-center gap-1.5">
            {[
              { id: 'all', label: 'All Inquiries' },
              { id: 'new', label: 'New' },
              { id: 'contacted', label: 'Contacted' },
              { id: 'menu_sent', label: 'Menu Sent' },
              { id: 'trial_active', label: 'Trial Active' },
              { id: 'subscribed', label: 'Subscribed' },
              { id: 'lost', label: 'Archived / Lost' },
            ].map((tab) => {
              const active = activeTab === tab.id;
              return (
                <button
                  key={tab.id}
                  type="button"
                  onClick={() => setActiveTab(tab.id)}
                  className={`rounded-xl px-3 py-1.5 text-xs font-bold transition-all cursor-pointer ${
                    active
                      ? 'bg-[#C59B27] text-[#07170C] shadow-xs'
                      : 'bg-white/10 text-white hover:bg-white/20'
                  }`}
                >
                  {tab.label}
                </button>
              );
            })}
          </div>

          {/* Leads Table / Grid */}
          {loading ? (
            <div className="py-16 text-center text-white/70">
              <Loader2 className="size-7 animate-spin text-[#F3CF7A] mx-auto mb-2" />
              <p className="text-xs">Loading live pipeline inquiries...</p>
            </div>
          ) : filteredLeads.length === 0 ? (
            <div className="py-16 text-center text-white/70 rounded-2xl border border-dashed border-white/20">
              <p className="text-sm font-bold text-white">No leads found in this filter.</p>
              <p className="text-xs text-white/60 mt-1">
                New inquiries submitted via WhatsApp clicks, calls, or forms will appear here in real time.
              </p>
            </div>
          ) : (
            <div className="space-y-3">
              {filteredLeads.map((lead) => {
                const isUpdating = updatingId === lead.id;
                const isEditingNotes = editingNotesId === lead.id;
                const cleanPhone = (lead.phone || '').replace(/\D/g, '');
                const waPhone = cleanPhone.length === 10 ? `91${cleanPhone}` : cleanPhone;
                const waFollowupText = encodeURIComponent(
                  `Namaste ${lead.name || 'Ji'}, greetings from Student's Mess Ranchi! We received your inquiry regarding our ${lead.plan_interest || 'meal plans'}. Here is our latest menu and daily delivery schedule. Would you like to schedule a trial meal?`
                );

                return (
                  <div
                    key={lead.id}
                    className="rounded-2xl border border-white/10 bg-[#07170C]/80 p-4 sm:p-5 transition-all hover:border-[#C59B27]/50"
                  >
                    <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-4">
                      {/* Left: Customer Info */}
                      <div className="space-y-1.5 flex-1">
                        <div className="flex flex-wrap items-center gap-2">
                          <span className="font-bold text-white text-base">
                            {lead.name || 'Anonymous Inquirer'}
                          </span>

                          {/* Channel Badge */}
                          <span
                            className={`inline-flex items-center gap-1.5 px-2.5 py-0.5 rounded-full text-[10px] font-bold border uppercase tracking-wider ${
                              lead.channel === 'whatsapp' || lead.channel === 'whatsapp_click'
                                ? 'bg-emerald-500/10 text-emerald-400 border-emerald-500/30'
                                : lead.channel === 'call' || lead.channel === 'phone_call'
                                ? 'bg-amber-500/10 text-amber-400 border-amber-500/30'
                                : 'bg-[#C59B27]/20 text-[#F3CF7A] border-[#C59B27]/40'
                            }`}
                          >
                            {lead.channel === 'whatsapp' || lead.channel === 'whatsapp_click' ? (
                              <MessageCircle className="size-3" />
                            ) : lead.channel === 'call' || lead.channel === 'phone_call' ? (
                              <Phone className="size-3" />
                            ) : (
                              <FileText className="size-3" />
                            )}
                            {lead.channel.replace('_', ' ')}
                          </span>

                          {/* Timestamp */}
                          <span className="text-[11px] text-white/60 flex items-center gap-1">
                            <Clock className="size-3" />
                            {new Date(lead.created_at).toLocaleString('en-IN', {
                              dateStyle: 'medium',
                              timeStyle: 'short',
                            })}
                          </span>
                        </div>

                        {/* Contact details */}
                        <div className="flex flex-wrap items-center gap-x-4 gap-y-1 text-xs text-white/80">
                          {lead.phone && (
                            <a
                              href={`tel:${lead.phone}`}
                              className="hover:text-[#F3CF7A] font-mono flex items-center gap-1 font-bold"
                            >
                              <Phone className="size-3 text-[#F3CF7A]" />
                              {lead.phone}
                            </a>
                          )}
                          {lead.email && (
                            <a
                              href={`mailto:${lead.email}`}
                              className="hover:text-[#F3CF7A] flex items-center gap-1"
                            >
                              <Mail className="size-3 text-[#F3CF7A]" />
                              {lead.email}
                            </a>
                          )}
                          {lead.organization && (
                            <span className="flex items-center gap-1 text-white/70">
                              <Building2 className="size-3 text-[#F3CF7A]" />
                              {lead.organization}
                            </span>
                          )}
                          {lead.area && (
                            <span className="flex items-center gap-1 text-white/70">
                              <MapPin className="size-3 text-[#F3CF7A]" />
                              {lead.area}
                            </span>
                          )}
                        </div>

                        {/* Plan interest */}
                        {lead.plan_interest && (
                          <p className="text-xs text-white/80">
                            <span className="text-white/60">Requirement: </span>
                            <span className="font-bold text-[#F3CF7A]">{lead.plan_interest}</span>
                          </p>
                        )}

                        {/* Notes preview or editor */}
                        {isEditingNotes ? (
                          <div className="mt-3 space-y-2">
                            <textarea
                              value={noteDraft}
                              onChange={(e) => setNoteDraft(e.target.value)}
                              placeholder="Write internal notes (e.g. Hosteler at Lalpur, requested Jain food, called twice)..."
                              className="w-full rounded-xl border border-white/20 bg-[#07170C]/90 p-2.5 text-xs text-white placeholder-white/40 focus:border-[#C59B27] focus:outline-none"
                              rows={2}
                            />
                            <div className="flex items-center gap-2">
                              <button
                                type="button"
                                onClick={() => handleSaveNotes(lead.id)}
                                disabled={isUpdating}
                                className="rounded-lg bg-[#C59B27] px-3 py-1 text-xs font-bold text-[#07170C] hover:bg-[#D4AF37] cursor-pointer"
                              >
                                Save Note
                              </button>
                              <button
                                type="button"
                                onClick={() => setEditingNotesId(null)}
                                className="rounded-lg bg-white/10 px-3 py-1 text-xs text-white hover:bg-white/20 cursor-pointer"
                              >
                                Cancel
                              </button>
                            </div>
                          </div>
                        ) : (
                          <div className="mt-1 flex items-center gap-2">
                            {lead.notes ? (
                              <p className="text-xs italic text-white/80 bg-white/5 rounded-lg px-2.5 py-1 border border-white/10">
                                Note: {lead.notes}
                              </p>
                            ) : null}
                            <button
                              type="button"
                              onClick={() => {
                                setEditingNotesId(lead.id);
                                setNoteDraft(lead.notes || '');
                              }}
                              className="text-[11px] text-[#F3CF7A] hover:text-[#C59B27] underline underline-offset-2 cursor-pointer"
                            >
                              {lead.notes ? 'Edit Note' : '+ Add Internal Note'}
                            </button>
                          </div>
                        )}
                      </div>

                      {/* Right: Actions & Status */}
                      <div className="flex flex-wrap items-center gap-2.5 shrink-0">
                        {/* Status Dropdown */}
                        <select
                          value={lead.status}
                          disabled={isUpdating}
                          onChange={(e) => handleStatusChange(lead.id, e.target.value)}
                          className="rounded-xl border border-white/20 bg-[#07170C] px-3 py-2 text-xs font-bold text-white focus:border-[#C59B27] focus:outline-none cursor-pointer"
                        >
                          {STATUS_OPTIONS.map((opt) => (
                            <option key={opt.value} value={opt.value} className="bg-[#07170C] text-white">
                              {opt.label}
                            </option>
                          ))}
                        </select>

                        {/* 1-Click WhatsApp Follow-up */}
                        {cleanPhone ? (
                          <a
                            href={`https://wa.me/${waPhone}?text=${waFollowupText}`}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="inline-flex items-center gap-1.5 rounded-xl bg-[#128C4B] hover:bg-[#0E703C] px-3.5 py-2 text-xs font-bold text-white shadow-xs transition-all"
                            title="Open WhatsApp chat with pre-written message"
                          >
                            <MessageCircle className="size-3.5" />
                            <span>WhatsApp Follow-up</span>
                          </a>
                        ) : null}

                        {/* Delete Button */}
                        <button
                          type="button"
                          onClick={() => handleDeleteLead(lead.id)}
                          disabled={isUpdating}
                          className="flex size-8 items-center justify-center rounded-xl border border-white/20 bg-white/10 text-white/70 hover:border-rose-500/40 hover:bg-rose-950/40 hover:text-rose-400 transition-colors cursor-pointer"
                          title="Delete Lead"
                        >
                          <Trash2 className="size-3.5" />
                        </button>
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
          )}
        </section>

        {/* Analytics Breakdown & Attribution */}
        <section className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          {/* Top Converting Landing Pages */}
          <div className="rounded-2xl border border-[#C59B27]/30 bg-[#0F2B18] p-5 sm:p-6 shadow-xl">
            <h3 className="text-base font-display font-bold text-white flex items-center gap-2 mb-4">
              <TrendingUp className="size-4 text-[#F3CF7A]" />
              <span>Top Conversion Pages</span>
            </h3>
            <div className="space-y-2.5">
              {eventStats?.byPage && eventStats.byPage.length > 0 ? (
                eventStats.byPage.map((item, idx) => (
                  <div
                    key={idx}
                    className="flex items-center justify-between rounded-xl bg-[#07170C]/80 px-3.5 py-2.5 text-xs border border-white/10"
                  >
                    <span className="font-mono text-white/80 truncate max-w-[280px]">
                      {item.source_page || '/'}
                    </span>
                    <span className="font-bold text-[#F3CF7A] bg-white/10 border border-[#C59B27]/30 px-2 py-0.5 rounded-md">
                      {item.count} conversions
                    </span>
                  </div>
                ))
              ) : (
                <p className="text-xs text-white/50 italic py-4">
                  Telemetry tracking live clicks across all pages.
                </p>
              )}
            </div>
          </div>

          {/* Live Recent Events Stream */}
          <div className="rounded-2xl border border-[#C59B27]/30 bg-[#0F2B18] p-5 sm:p-6 shadow-xl">
            <h3 className="text-base font-display font-bold text-white flex items-center gap-2 mb-4">
              <Calendar className="size-4 text-[#F3CF7A]" />
              <span>Live Telemetry Stream</span>
            </h3>
            <div className="space-y-2 max-h-[280px] overflow-y-auto pr-1">
              {recentEvents && recentEvents.length > 0 ? (
                recentEvents.slice(0, 10).map((ev) => (
                  <div
                    key={ev.id}
                    className="flex items-center justify-between rounded-xl border border-white/10 bg-[#07170C]/80 px-3 py-2 text-xs"
                  >
                    <div className="flex items-center gap-2 truncate">
                      <span
                        className={`size-2 rounded-full ${
                          ev.event_type === 'whatsapp_click'
                            ? 'bg-[#128C4B]'
                            : ev.event_type === 'phone_call'
                            ? 'bg-[#C59B27]'
                            : 'bg-purple-400'
                        }`}
                      />
                      <span className="font-medium text-white truncate">
                        {ev.intent_tag || ev.event_type.replace('_', ' ')}
                      </span>
                    </div>
                    <span className="text-[10px] text-white/60 font-mono shrink-0 ml-2">
                      {new Date(ev.created_at).toLocaleTimeString('en-IN', {
                        hour: '2-digit',
                        minute: '2-digit',
                      })}
                    </span>
                  </div>
                ))
              ) : (
                <p className="text-xs text-white/50 italic py-4">
                  No events logged yet today.
                </p>
              )}
            </div>
          </div>
        </section>
      </main>
    </div>
  );
}
