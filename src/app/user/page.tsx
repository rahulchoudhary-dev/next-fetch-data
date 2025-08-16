import UserList from "@/app/user/_components/UserList";
import Link from "next/link";
import { Suspense } from "react";
import CreateUserForm from "./_components/createUserForm";
import Loading from "./loading";

const UserPage = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
      {/* Navigation Header */}
      <div className="relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-purple-600/20 to-pink-600/20 backdrop-blur-3xl"></div>
        <div className="relative px-6 py-8 sm:px-8 lg:px-12">
          <div className="mx-auto max-w-7xl">
            {/* Back Link */}
            <div className="mb-8">
              <Link
                href={"/"}
                className="inline-flex items-center gap-2 text-purple-300 hover:text-white transition-colors duration-300 group"
              >
                <span className="transform group-hover:-translate-x-1 transition-transform duration-300">
                  ←
                </span>
                <span className="font-medium">Back to Home</span>
              </Link>
            </div>

            {/* Header */}
            <header className="text-center mb-12">
              <h1 className="text-5xl font-bold bg-gradient-to-r from-white via-purple-200 to-pink-200 bg-clip-text text-transparent mb-4">
                User Management Center
              </h1>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed">
                Create new users and manage existing ones with our comprehensive
                user management system
              </p>

              {/* Feature Pills */}
              <div className="mt-8 flex flex-wrap items-center justify-center gap-4">
                <div className="bg-white/10 backdrop-blur-sm rounded-full px-4 py-2 border border-white/20">
                  <span className="text-purple-200 font-medium">
                    ✨ Create Users
                  </span>
                </div>
                <div className="bg-white/10 backdrop-blur-sm rounded-full px-4 py-2 border border-white/20">
                  <span className="text-pink-200 font-medium">
                    👥 Manage Profiles
                  </span>
                </div>
                <div className="bg-white/10 backdrop-blur-sm rounded-full px-4 py-2 border border-white/20">
                  <span className="text-blue-200 font-medium">
                    🔍 View Details
                  </span>
                </div>
              </div>
            </header>
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div className="px-6 ">
        <div className="mt-2 ">
          {/* Content Grid */}
          <div className="grid grid-cols-1 xl:grid-cols-2 gap-8">
            {/* Left Panel - Create User Form */}
            <div className="bg-white/5 backdrop-blur-sm rounded-2xl border border-white/10 overflow-hidden hover:border-white/20 transition-all duration-500 shadow-2xl">
              {/* Panel Header */}
              <div className="bg-gradient-to-r from-purple-600/20 to-pink-600/20 border-b border-white/10 px-8 py-6">
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 bg-gradient-to-r from-purple-600 to-pink-600 rounded-xl flex items-center justify-center shadow-lg">
                    <span className="text-white text-xl">➕</span>
                  </div>
                  <div>
                    <h2 className="text-2xl font-bold text-white">
                      Create New User
                    </h2>
                    <p className="text-gray-300 text-sm">
                      Add a new user to the system
                    </p>
                  </div>
                </div>
              </div>

              {/* Panel Content */}
              <div className="p-8">
                <div className="max-h-[calc(100vh-400px)] overflow-y-auto pr-2 custom-scrollbar">
                  <CreateUserForm />
                </div>
              </div>
            </div>

            {/* Right Panel - User List */}
            <div className="bg-white/5 backdrop-blur-sm rounded-2xl border border-white/10 overflow-hidden hover:border-white/20 transition-all duration-500 shadow-2xl">
              {/* Panel Header */}

              {/* Panel Content */}
              <div className="p-8">
                <div className="max-h-[calc(100vh-400px)] overflow-y-auto pr-2 custom-scrollbar">
                  <Suspense fallback={<Loading />}>
                    <UserList />
                  </Suspense>
                </div>
              </div>
            </div>
          </div>

          {/* Quick Actions Bar */}
        </div>
      </div>
    </div>
  );
};

export default UserPage;
