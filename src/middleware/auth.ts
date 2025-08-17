// middleware/auth.ts
import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";

export function authMiddleware(request: NextRequest) {
  const token = request.cookies.get("token")?.value;

  // Dummy auth: redirect if no token
  if (!token && request.nextUrl.pathname.startsWith("/dashboard")) {
    console.log("🔴 [Auth Middleware] No token, redirecting to /login");
    return NextResponse.redirect(new URL("/", request.url));
  }

  // If token exists, continue
  return null;
}
