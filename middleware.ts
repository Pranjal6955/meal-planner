import { auth } from "@/lib/auth";
import { NextResponse } from "next/server";

export default auth((req) => {
  const isLoggedIn = !!req.auth;
  const { pathname } = req.nextUrl;

  // Public routes that don't require authentication
  const publicRoutes = ["/", "/sign-in", "/sign-up"];
  if (publicRoutes.includes(pathname)) {
    return NextResponse.next();
  }

  // Protected routes - require authentication
  if (!isLoggedIn) {
    return NextResponse.redirect(new URL("/sign-in", req.url));
  }

  // Admin-only routes
  const adminRoutes = ["/admin"];
  if (adminRoutes.some(route => pathname.startsWith(route))) {
    const userRole = req.auth?.user?.role;
    if (userRole !== "ADMIN") {
      return NextResponse.redirect(new URL("/client", req.url));
    }
  }

  return NextResponse.next();
});

export const config = {
  matcher: [
    /*
     * Match all request paths except for the ones starting with:
     * - api (API routes)
     * - _next/static (static files)
     * - _next/image (image optimization files)
     * - favicon.ico (favicon file)
     */
    "/((?!api|_next/static|_next/image|favicon.ico).*)",
  ],
};
