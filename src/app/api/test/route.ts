import { NextResponse } from 'next/server';
import { getAllTransactions } from '@/libraries/tests';

export const POST = async (request: Request) => {
  try {
    const user = await request.json();
    return new NextResponse(JSON.stringify(user), { status: 201 });
  } catch (err) {
    return new NextResponse(
      JSON.stringify({ err, message: 'User not found' }),
      {
        status: 500
      }
    );
  }
};

// export getAllTransactions as GET
