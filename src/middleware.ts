import { NextRequest, NextResponse } from 'next/server';

export default async function middleware(req: NextRequest) {
  const token = req.cookies.get('accessToken')?.value;
  // if (token && req.nextUrl.pathname !== '/dashboard') {
  //   return NextResponse.redirect(new URL('/dashboard', req.url))
  // }
  if (!token && req.nextUrl.pathname !== '/account') {
    return NextResponse.redirect(new URL('/account', req.url));
  }
}

export const config = {
  matcher: ['/dashboard/:path*', '/account/:path*'],
};
