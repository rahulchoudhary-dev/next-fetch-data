import UserList from "@/app/user/_components/UserList";
import Link from "next/link";
import { Suspense } from "react";
import Loading from "./loading";
import CreateUserForm from "./_components/createUserForm";

const UserPage = () => {
  return (
    <div className="p-6">
      <Link href={"/"} className="text-blue-600 underline">
        Back
      </Link>

      <header className="mb-6">
        <h1 className="text-3xl font-bold">Welcome to the Blog</h1>
        <p className="text-gray-600">Read the latest posts below.</p>
      </header>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {/* Left Panel - Form */}
        <div className="p-4 border rounded-lg shadow bg-gray-500">
          <h2 className="text-xl font-semibold mb-4">Create User</h2>
          <CreateUserForm />
        </div>

        {/* Right Panel - List */}
        <div className="p-4 border rounded-lg shadow bg-gray-500">
          <h2 className="text-xl font-semibold mb-4">User List</h2>
          <Suspense fallback={<Loading />}>
            <UserList />
          </Suspense>
        </div>
      </div>
    </div>
  );
};

export default UserPage;
