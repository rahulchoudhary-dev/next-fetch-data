import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <div className="font-sans min-h-screen flex flex-col items-center justify-center bg-gradient-to-br from-gray-50 to-gray-100 dark:from-gray-900 dark:to-gray-800 p-6">
      {/* Header Section */}
      <header className="flex flex-col items-center gap-4 text-center mb-10">
        <Image
          src="/next.svg"
          alt="Next.js logo"
          width={120}
          height={30}
          priority
          className="dark:invert"
        />
        <h1 className="text-4xl sm:text-5xl font-extrabold text-gray-900 dark:text-white">
          Welcome to <span className="text-blue-600">Next.js</span> 🚀
        </h1>
        <p className="text-gray-600 dark:text-gray-300 max-w-lg">
          A modern React framework for building fast, scalable, and powerful
          applications.
        </p>
      </header>

      {/* Navigation Cards */}
      <main className="grid grid-cols-1 sm:grid-cols-3 gap-6 w-full max-w-4xl">
        <Link
          href="/blog"
          className="p-6 bg-white dark:bg-gray-800 shadow-md rounded-2xl hover:shadow-xl transition duration-300 flex flex-col items-center text-center"
        >
          <h2 className="text-xl font-semibold text-gray-800 dark:text-white mb-2">
            📖 Blog Page
          </h2>
          <p className="text-sm text-gray-600 dark:text-gray-300">
            Read latest articles and tutorials.
          </p>
        </Link>

        <Link
          href="/user"
          className="p-6 bg-white dark:bg-gray-800 shadow-md rounded-2xl hover:shadow-xl transition duration-300 flex flex-col items-center text-center"
        >
          <h2 className="text-xl font-semibold text-gray-800 dark:text-white mb-2">
            👤 User Page
          </h2>
          <p className="text-sm text-gray-600 dark:text-gray-300">
            Manage your profile and account settings.
          </p>
        </Link>

        <Link
          href="/dashboard"
          className="p-6 bg-white dark:bg-gray-800 shadow-md rounded-2xl hover:shadow-xl transition duration-300 flex flex-col items-center text-center"
        >
          <h2 className="text-xl font-semibold text-gray-800 dark:text-white mb-2">
            📊 Dashboard
          </h2>
          <p className="text-sm text-gray-600 dark:text-gray-300">
            View insights and monitor your app’s activity.
          </p>
        </Link>
        <Link
          prefetch={true}
          href="/product"
          className="p-6 bg-white dark:bg-gray-800 shadow-md rounded-2xl hover:shadow-xl transition duration-300 flex flex-col items-center text-center"
        >
          <h2 className="text-xl font-semibold text-gray-800 dark:text-white mb-2">
            📊 Product Page
          </h2>
          <p className="text-sm text-gray-600 dark:text-gray-300">
            Product Page
          </p>
        </Link>
      </main>

      {/* Footer */}
      <footer className="mt-12 text-sm text-gray-500 dark:text-gray-400">
        Powered by Next.js & TailwindCSS 💙
      </footer>
    </div>
  );
}
