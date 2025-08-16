import { getUsers } from "@/app/user/_actions";
import Link from "next/link";
import ViewProfile from "./viewProfile";

export default async function UserList() {
  const users = await getUsers();
  // await new Promise((resolve, reject) => setTimeout(resolve, 5000));

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
      {/* Header Section */}

      {/* Users Grid */}
      <div className="p-4">
        <div className="">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {users.map((user) => (
              <div
                key={user.id}
                className="group relative bg-white/5 backdrop-blur-sm rounded-2xl border border-white/10 overflow-hidden hover:bg-white/10 hover:border-white/20 transition-all duration-500 hover:scale-105 hover:shadow-2xl hover:shadow-purple-500/25"
              >
                {/* User Avatar */}
                <div className="relative p-6 pb-4">
                  <div className="w-20 h-20 mx-auto mb-4 bg-gradient-to-r from-purple-600 to-pink-600 rounded-full flex items-center justify-center shadow-lg">
                    <span className="text-2xl font-bold text-white">
                      {user.name.charAt(0).toUpperCase()}
                    </span>
                  </div>

                  {/* User ID Badge */}
                  <div className="absolute top-4 right-4 bg-black/50 backdrop-blur-sm text-white px-2 py-1 rounded-full text-xs font-medium">
                    ID: {user.id}
                  </div>
                </div>

                {/* User Information */}
                <div className="px-6 pb-6 space-y-4">
                  {/* Name */}
                  <div className="text-center">
                    <h3 className="text-xl font-bold text-white mb-1 group-hover:text-purple-200 transition-colors">
                      {user.name}
                    </h3>
                  </div>

                  {/* Contact Information */}
                  <div className="space-y-3">
                    <div className="flex items-center gap-3">
                      <div className="w-8 h-8 bg-blue-500/20 rounded-lg flex items-center justify-center flex-shrink-0">
                        <span className="text-blue-400 text-sm">📧</span>
                      </div>
                      <div className="min-w-0 flex-1">
                        <p className="text-xs text-gray-400 uppercase tracking-wide">
                          Email
                        </p>
                        <p className="text-sm text-gray-300 truncate font-medium">
                          {user.email}
                        </p>
                      </div>
                    </div>

                    <div className="flex items-center gap-3">
                      <div className="w-8 h-8 bg-green-500/20 rounded-lg flex items-center justify-center flex-shrink-0">
                        <span className="text-green-400 text-sm">🔒</span>
                      </div>
                      <div className="min-w-0 flex-1">
                        <p className="text-xs text-gray-400 uppercase tracking-wide">
                          Password
                        </p>
                        <p className="text-sm text-gray-300 font-mono">
                          {"•".repeat(Math.min(user.password.length, 8))}
                        </p>
                      </div>
                    </div>
                  </div>

                  {/* Action Button */}
                  <ViewProfile id={user.id.toString()} />
                </div>

                {/* Hover Overlay Effect */}
                <div className="absolute inset-0 bg-gradient-to-t from-purple-600/10 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none"></div>
              </div>
            ))}
          </div>

          {/* Empty State */}
          {users.length === 0 && (
            <div className="text-center py-16">
              <div className="w-24 h-24 mx-auto mb-6 bg-gradient-to-r from-gray-600 to-gray-700 rounded-full flex items-center justify-center">
                <span className="text-4xl">👥</span>
              </div>
              <h3 className="text-2xl font-bold text-white mb-2">
                No Users Found
              </h3>
              <p className="text-gray-400">
                There are no users to display at the moment.
              </p>
            </div>
          )}
        </div>
      </div>

      {/* Footer Stats */}
      {users.length > 0 && (
        <div className="border-t border-white/10 bg-black/20 backdrop-blur-sm">
          <div className="px-6 py-8 sm:px-8 lg:px-12">
            <div className="mx-auto max-w-7xl">
              <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
                <div>
                  <div className="text-3xl font-bold text-white mb-2">
                    {users.length}
                  </div>
                  <div className="text-gray-400">Total Users</div>
                </div>
                <div>
                  <div className="text-3xl font-bold text-purple-400 mb-2">
                    {
                      new Set(users.map((user) => user.email.split("@")[1]))
                        .size
                    }
                  </div>
                  <div className="text-gray-400">Email Domains</div>
                </div>
                <div>
                  <div className="text-3xl font-bold text-pink-400 mb-2">
                    100%
                  </div>
                  <div className="text-gray-400">Active Profiles</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
