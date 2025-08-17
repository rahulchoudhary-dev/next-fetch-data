// middleware/logging.ts
import type { NextRequest } from "next/server";

export function loggingMiddleware(request: NextRequest) {
  console.log("🟢 [Logging Middleware] URL accessed:", request.url);
  // You can add more logging logic here
}
