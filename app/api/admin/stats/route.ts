import { NextRequest, NextResponse } from 'next/server';
import { requireAuth } from '@/lib/auth';
import { getStats, getAllSubmissions } from '@/lib/db';

export const runtime = 'nodejs';

export async function GET(request: NextRequest) {
  const authResponse = requireAuth(request);
  if (authResponse) return authResponse;

  try {
    const stats = getStats();
    const submissions = getAllSubmissions();
    return NextResponse.json({ stats, submissions });
  } catch (error) {
    console.error('Admin stats error:', error);
    return NextResponse.json({ error: 'Internal server error' }, { status: 500 });
  }
}
