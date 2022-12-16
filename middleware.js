import { withClerkMiddleware, getAuth } from '@clerk/nextjs/server';
import { NextResponse } from 'next/server';

export default withClerkMiddleware((req) => {
  const { userId } = getAuth(req);

  // Redirect user to login
  if (!userId) {
    const signInUrl = new URL('/sign-in', req.url);
    signInUrl.searchParams.set('redirect_url', req.url);
    return NextResponse.redirect(signInUrl);
  }

  return NextResponse.next();
});

// Only run middleware on matched routes
export const config = { matcher: ['/dashboard/:path*'] };
