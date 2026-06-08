import { NextRequest, NextResponse } from 'next/server';

export async function GET(request: NextRequest) {
  const { searchParams } = new URL(request.url);
  const targetUrl = searchParams.get('url');

  if (!targetUrl) {
    return new NextResponse('Missing url parameter', { status: 400 });
  }

  try {
    // Fetch the unblocked target content from Vercel's backend
    const response = await fetch(decodeURIComponent(targetUrl), {
      headers: {
        'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36',
      },
    });

    const data = await response.text();

    // Return the clean HTML straight to your iframe layout
    return new NextResponse(data, {
      status: 200,
      headers: {
        'Content-Type': 'text/html',
      },
    });
  } catch (error) {
    return new NextResponse('Proxy connection error', { status: 500 });
  }
}
