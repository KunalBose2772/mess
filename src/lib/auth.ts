import { SignJWT, jwtVerify } from 'jose';
import crypto from 'crypto';
import db from './db';

const JWT_SECRET_STRING = process.env.JWT_SECRET || 'students-mess-ranchi-crm-secret-salt-2026';
const JWT_SECRET = new TextEncoder().encode(JWT_SECRET_STRING);

export interface AdminUser {
  id: number;
  username: string;
  name: string;
}

export function hashPassword(password: string): string {
  return crypto.pbkdf2Sync(password, 'mess-salt-2026', 1000, 64, 'sha512').toString('hex');
}

export function seedAdminIfNotExists() {
  const existing = db.prepare('SELECT COUNT(*) as count FROM admin_users').get() as { count: number };
  if (existing.count === 0) {
    const defaultPassword = process.env.ADMIN_PASSWORD || 'RanchiMess@2026';
    const passwordHash = hashPassword(defaultPassword);
    db.prepare(`
      INSERT INTO admin_users (username, password_hash, name, created_at)
      VALUES (?, ?, ?, ?)
    `).run('admin', passwordHash, 'Operations Manager', new Date().toISOString());
  }
}

export function verifyAdminCredentials(username: string, password: string): AdminUser | null {
  seedAdminIfNotExists();
  const user = db.prepare('SELECT * FROM admin_users WHERE username = ?').get(username) as
    | { id: number; username: string; password_hash: string; name: string }
    | undefined;

  if (!user) return null;
  const hash = hashPassword(password);
  if (crypto.timingSafeEqual(Buffer.from(user.password_hash), Buffer.from(hash))) {
    return {
      id: user.id,
      username: user.username,
      name: user.name,
    };
  }
  return null;
}

export async function createSessionToken(user: AdminUser): Promise<string> {
  return new SignJWT({ sub: String(user.id), username: user.username, name: user.name })
    .setProtectedHeader({ alg: 'HS256' })
    .setIssuedAt()
    .setExpirationTime('7d')
    .sign(JWT_SECRET);
}

export async function verifySessionToken(token: string): Promise<AdminUser | null> {
  try {
    const { payload } = await jwtVerify(token, JWT_SECRET);
    if (!payload.sub || !payload.username) return null;
    return {
      id: Number(payload.sub),
      username: payload.username as string,
      name: (payload.name as string) || 'Admin',
    };
  } catch {
    return null;
  }
}

