// app/blog/page.tsx
import Link from "next/link";
import { Suspense } from "react";
import Loading from "./loading";
import BlogList from "./_components/blogList";

export default function BlogPage() {
  return (
    <div className="min-h-screen bg-gray-50 p-8">
      {/* Back */}
      <div className="mb-6">
        <Link href="/" className="text-blue-600 underline">
          ← Back
        </Link>
      </div>

      {/* Header */}
      <header className="max-w-5xl mx-auto mb-8 text-center">
        <h1 className="text-4xl font-bold text-gray-900">Blog</h1>
        <p className="text-gray-600 mt-2">
          Read the latest posts and updates from our team.
        </p>
      </header>

      {/* Content */}
      <section className="max-w-5xl mx-auto">
        <Suspense fallback={<Loading />}>
          <BlogList />
        </Suspense>
      </section>
    </div>
  );
}
