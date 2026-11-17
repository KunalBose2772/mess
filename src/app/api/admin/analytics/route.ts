import { NextRequest, NextResponse } from 'next/server';
import { dbService } from '@/lib/db';
import { verifySessionToken } from '@/lib/auth';

export async function GET(req: NextRequest) {
  const token = req.cookies.get('admin_session')?.value;
  if (!token) {
    return NextResponse.json({ error: 'Unauthorized' }, { status: 401 });
  }

  const user = await verifySessionToken(token);
  if (!user) {
    return NextResponse.json({ error: 'Unauthorized' }, { status: 401 });
  }

  const eventStats = dbService.getEventStats();
  const leadStats = dbService.getLeadStats();
  const recentEvents = dbService.getRecentEvents(30);

  return NextResponse.json({
    user,
    eventStats,
    leadStats,
    recentEvents,
  });
}

