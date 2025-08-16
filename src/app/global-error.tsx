"use client";

import Link from "next/link";
import { redirect } from "next/navigation";

export default function GlobalError({
  error,
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  return (
    <html>
      <body className="flex min-h-screen items-center justify-center bg-gray-100">
        <div className="bg-white shadow-lg rounded-2xl p-8 max-w-md text-center">
          <h2 className="text-2xl font-bold text-red-600 mb-4">
            Oops! Something went wrong
          </h2>

          {/* Show error message for debugging */}
          <p className="text-gray-700 text-sm mb-6">
            {error?.message || "An unexpected error occurred."}
          </p>

          <div className="flex justify-center gap-4">
            <Link
              href={"/"}
              className="px-4 py-2 bg-gray-300 text-gray-900 rounded-lg hover:bg-gray-400"
            >
              Go Home
            </Link>
          </div>
        </div>
      </body>
    </html>
  );
}
