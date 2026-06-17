import { NextRequest, NextResponse } from 'next/server';
import { performTriage } from '@/lib/ai/triage-engine';

export async function POST(req: NextRequest) {
  try {
    const body = await req.json();
    const { userInput, userInfo, chatHistory } = body;

    if (!userInput) {
      return NextResponse.json(
        { error: 'userInput is required' },
        { status: 400 }
      );
    }

    const triageResult = await performTriage(userInput, userInfo, chatHistory);
    return NextResponse.json(triageResult);
  } catch (error: any) {
    console.error('API Triage Error:', error);
    return NextResponse.json(
      { error: error.message || 'Internal Server Error' },
      { status: 500 }
    );
  }
}
