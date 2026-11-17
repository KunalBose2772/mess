import { NextRequest, NextResponse } from 'next/server';
import { jwtVerify } from 'jose';

const JWT_SECRET_STRING = process.env.JWT_SECRET || 'students-mess-ranchi-crm-secret-salt-2026';
const JWT_SECRET = new TextEncoder().encode(JWT_SECRET_STRING);

export async function middleware(req: NextRequest) {
  const { pathname } = req.nextUrl;

  // Only intercept /admin routes
  if (pathname.startsWith('/admin')) {
    const sessionToken = req.cookies.get('admin_session')?.value;
    let isAuthenticated = false;

    if (sessionToken) {
      try {
        await jwtVerify(sessionToken, JWT_SECRET);
        isAuthenticated = true;
      } catch {
        isAuthenticated = false;
      }
    }

    // If on /admin/login and authenticated, redirect to /admin dashboard
    if (pathname === '/admin/login') {
      if (isAuthenticated) {
        return NextResponse.redirect(new URL('/admin', req.url));
      }
      return NextResponse.next();
    }

    // If on any other /admin page and unauthenticated, redirect to login
    if (!isAuthenticated) {
      const loginUrl = new URL('/admin/login', req.url);
      loginUrl.searchParams.set('from', pathname);
      return NextResponse.redirect(loginUrl);
    }
  }

  return NextResponse.next();
}

export const config = {
  matcher: ['/admin/:path*'],
};

