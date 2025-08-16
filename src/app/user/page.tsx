import UserList from "@/components/UserList";
import Link from "next/link";
import { Suspense } from "react";
import Loading from "./loading";

const UserPage = () => {
  return (
    <div className="p-6">
      <Link href={"/"} className="text-blue-600 underline">
        Back
      </Link>
      <header>
        <h1>Welcome to the Blog</h1>
        <p>Read the latest posts below.</p>
      </header>

      <h1 className="text-2xl font-bold my-4">User Page</h1>
      <Suspense fallback={<Loading />}>
        <UserList />
      </Suspense>
    </div>
  );
};

export default UserPage;
