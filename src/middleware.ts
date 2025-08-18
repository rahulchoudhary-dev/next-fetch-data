import { NextResponse, userAgent } from "next/server";
import type { NextRequest } from "next/server";
import { loggingMiddleware } from "./middleware/logging";
import { authMiddleware } from "./middleware/auth";

// This function can be marked `async` if using `await` inside
export function middleware(request: NextRequest) {
  // console.log("request.url", request.url);

  // const { device, browser, cpu, os } = userAgent(request);
  // console.log("device", device, browser);
  // console.log("cpu", cpu, os);

  // 1️⃣ Run logging
  loggingMiddleware(request);

  // 2️⃣ Run auth
  const authResponse = authMiddleware(request);
  if (authResponse) return authResponse; // stop and redirect if needed

  // 3️⃣ Continue normally
  return NextResponse.next();

  // return NextResponse.redire?ct(new URL("/", request.url));
}

// export const config = {
//   matcher: "/dashboard",
// };
