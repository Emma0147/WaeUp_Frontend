import { NextResponse } from 'next/server';

export const getAllTransactions = async () => {
  try {
    return new NextResponse(JSON.stringify(['hi', 'mom']), { status: 201 });
  } catch (err) {
    return new NextResponse(
      JSON.stringify({ err, message: 'User not found' }),
      {
        status: 500
      }
    );
  }
};
