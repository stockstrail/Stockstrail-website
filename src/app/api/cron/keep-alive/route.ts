import { NextResponse } from 'next/server';
import { createClient } from '@/lib/supabase/server';

export const dynamic = 'force-dynamic';

export async function GET() {
  try {
    const supabase = await createClient();
    // Lightweight heartbeat query to prevent Supabase Free Tier inactivity dormancy
    const { count, error } = await supabase
      .from('blogs')
      .select('id', { count: 'exact', head: true });

    if (error) {
      console.warn('Supabase keep-alive ping returned notice:', error.message);
      return NextResponse.json(
        { status: 'warning', message: error.message, timestamp: new Date().toISOString() },
        { status: 200 }
      );
    }

    return NextResponse.json({
      status: 'ok',
      message: 'Supabase heartbeat successful',
      blogCount: count ?? 0,
      timestamp: new Date().toISOString(),
    });
  } catch (err: any) {
    console.error('Supabase keep-alive failed:', err);
    return NextResponse.json(
      { status: 'error', message: err?.message || 'Unknown error' },
      { status: 500 }
    );
  }
}
