import { NextRequest, NextResponse } from 'next/server';
import { dbService } from '@/lib/db';
import { verifySessionToken } from '@/lib/auth';

async function checkAuth(req: NextRequest) {
  const token = req.cookies.get('admin_session')?.value;
  if (!token) return null;
  return await verifySessionToken(token);
}

export async function GET(req: NextRequest) {
  const user = await checkAuth(req);
  if (!user) {
    return NextResponse.json({ error: 'Unauthorized' }, { status: 401 });
  }

  const { searchParams } = new URL(req.url);
  const status = searchParams.get('status') || 'all';

  const leads = dbService.getAllLeads(status);
  const stats = dbService.getLeadStats();

  return NextResponse.json({ leads, stats });
}

export async function PATCH(req: NextRequest) {
  const user = await checkAuth(req);
  if (!user) {
    return NextResponse.json({ error: 'Unauthorized' }, { status: 401 });
  }

  try {
    const { id, status, notes, nextFollowup } = await req.json();

    if (!id || !status) {
      return NextResponse.json({ error: 'Lead ID and status required' }, { status: 400 });
    }

    dbService.updateLeadStatus(Number(id), status, notes, nextFollowup);
    return NextResponse.json({ success: true, message: 'Lead updated successfully' });
  } catch (error) {
    console.error('Update lead error:', error);
    return NextResponse.json({ error: 'Failed to update lead' }, { status: 500 });
  }
}

export async function DELETE(req: NextRequest) {
  const user = await checkAuth(req);
  if (!user) {
    return NextResponse.json({ error: 'Unauthorized' }, { status: 401 });
  }

  try {
    const { searchParams } = new URL(req.url);
    const id = searchParams.get('id');

    if (!id) {
      return NextResponse.json({ error: 'Lead ID required' }, { status: 400 });
    }

    dbService.deleteLead(Number(id));
    return NextResponse.json({ success: true, message: 'Lead deleted successfully' });
  } catch (error) {
    console.error('Delete lead error:', error);
    return NextResponse.json({ error: 'Failed to delete lead' }, { status: 500 });
  }
}

