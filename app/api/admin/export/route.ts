import { NextRequest, NextResponse } from 'next/server';
import { requireAuth } from '@/lib/auth';
import { getAllSubmissions } from '@/lib/db';

export const runtime = 'nodejs';

export async function GET(request: NextRequest) {
  const authResponse = requireAuth(request);
  if (authResponse) return authResponse;

  try {
    const submissions = getAllSubmissions();

    const headers = ['ID', 'Zielgruppe', 'Email', 'Frage 1', 'Frage 2', 'Frage 3', 'Frage 4', 'Bemerkung', 'Zeitstempel'];
    const rows = submissions.map((s: any) => [
      s.id, s.target_group, s.email, s.q1, s.q2, s.q3, s.q4, s.note || '', s.timestamp
    ]);

    const csv = [headers, ...rows].map(row => row.map(cell => `"${String(cell).replaceAll('"', '""')}"`).join(',')).join('\n');

    return new NextResponse(csv, {
      headers: {
        'Content-Type': 'text/csv',
        'Content-Disposition': `attachment; filename="sanerio-export-${new Date().toISOString().split('T')[0]}.csv"`
      }
    });
  } catch (error) {
    console.error('Admin export error:', error);
    return NextResponse.json({ error: 'Internal server error' }, { status: 500 });
  }
}
