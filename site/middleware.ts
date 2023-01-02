// middleware.ts
import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";
import { webhook } from "twilio";

// This function can be marked `async` if using `await` inside
export function middleware(request: NextRequest) {
  webhook();
  return NextResponse.next();
}

// See "Matching Paths" below to learn more
export const config = {
  matcher: "/api/sms",
};
