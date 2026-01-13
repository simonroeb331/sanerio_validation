import { NextRequest, NextResponse } from 'next/server';
import { submitForm } from '@/lib/db';


export const runtime = 'nodejs';

export async function POST(request: NextRequest) {
  try {
    const data = await request.json();

    if (!data.email || !/\S+@\S+\.\S+/.test(data.email)) {
      return NextResponse.json({ error: 'Invalid email' }, { status: 400 });
    }

    if (!data.targetGroup || !['eigentuemer', 'energieberater', 'handwerker'].includes(data.targetGroup)) {
      return NextResponse.json({ error: 'Invalid target group' }, { status: 400 });
    }

    if (!data.q1 || !data.q2 || !data.q3 || !data.q4) {
      return NextResponse.json({ error: 'All questions must be answered' }, { status: 400 });
    }

    submitForm({
      targetGroup: data.targetGroup,
      email: data.email,
      q1: data.q1,
      q2: data.q2,
      q3: data.q3,
      q4: data.q4,
      note: data.note
    });

    return NextResponse.json({ success: true });
  } catch (error) {
    console.error('Submit API error:', error);
    return NextResponse.json({ error: 'Internal server error' }, { status: 500 });
  }
}
