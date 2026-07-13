import { NextRequest, NextResponse } from "next/server";
import { authClient } from "./lib/auth-client";

// proxy.ts
export async function proxy(request: NextRequest) {
  const session = await authClient.getSession({
    fetchOptions: {
      headers: {
        cookie: request.headers.get("cookie") || "",
      },
    },
  });

  
  const isProtectedRoute = 
    request.nextUrl.pathname.startsWith("/dashboard") || 
    request.nextUrl.pathname.startsWith("/items");

  
  if (isProtectedRoute && !session.data) {
    return NextResponse.redirect(new URL("/login", request.url));
  }

  return NextResponse.next();
}


export const config = {
  matcher: ["/dashboard/:path*", "/profile", "/items/:path*"],
};