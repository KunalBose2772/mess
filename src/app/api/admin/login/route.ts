import { NextRequest, NextResponse } from 'next/server';
import { verifyAdminCredentials, createSessionToken } from '@/lib/auth';

export async function POST(req: NextRequest) {
  try {
    const { username, password } = await req.json();

    if (!username || !password) {
      return NextResponse.json(
        { error: 'Username and password are required' },
        { status: 400 }
      );
    }

    const user = verifyAdminCredentials(username.trim(), password);
    if (!user) {
      return NextResponse.json(
        { error: 'Invalid username or password' },
        { status: 401 }
      );
    }

    const token = await createSessionToken(user);

    const response = NextResponse.json({
      success: true,
      user: { id: user.id, username: user.username, name: user.name },
    });

    response.cookies.set('admin_session', token, {
      httpOnly: true,
      secure: process.env.NODE_ENV === 'production',
      sameSite: 'lax',
      path: '/',
      maxAge: 60 * 60 * 24 * 7, // 7 days
    });

    return response;
  } catch (error) {
    console.error('Login error:', error);
    return NextResponse.json(
      { error: 'Internal server error during authentication' },
      { status: 500 }
    );
  }
}

