import { NextResponse } from 'next/server';

export function middleware(req) {
const { pathname } = req.nextUrl;
  const token = req.cookies['token']; // Adjust according to your authentication method

  if (pathname.startsWith('/admin')) {
    if (!token) {
      return NextResponse.redirect(new URL('/login', req.url));
    }

    // Check if the user has admin privileges
    const user = verifyToken(token); // Implement this function
    if (user.role !== 'admin') {
      return NextResponse.redirect(new URL('/', req.url));
    }
  }

  return NextResponse.next();
}

function verifyToken(token) {
  // Verify the token and return user information
  // This is a placeholder; implement your actual token verification logic here
  return { role: 'admin' }; // Example user object
}

export const config = {
  matcher: ['/admin/:path*'],
};