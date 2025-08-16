import Link from "next/link";
import { getUserDetailsDb } from "../_actions";

const UserDetails = async ({ params }: { params: Promise<{ id: string }> }) => {
  const { id } = await params;
  const user = await getUserDetailsDb(Number(id));
  //   await new Promise((resolve, reject) => setTimeout(resolve, 5000));
  if (!user) {
    return (
      <div className="p-6">
        <Link href="/users" className="text-blue-600 underline">
          Back
        </Link>
        <h1 className="text-xl font-bold mt-4">User not found</h1>
      </div>
    );
  }

  return (
    <div className="p-6">
      <Link href="/user" className="text-blue-600 underline">
        Back
      </Link>

      <h1 className="text-2xl font-bold my-4">User Details</h1>

      <div className="rounded-lg border p-4 shadow">
        <p>
          <span className="font-semibold">ID:</span> {user.id}
        </p>
        <p>
          <span className="font-semibold">Name:</span> {user.name}
        </p>
        <p>
          <span className="font-semibold">Email:</span> {user.email}
        </p>
        <p>
          <span className="font-semibold">Password:</span> {user.password}
        </p>
      </div>
    </div>
  );
};

export default UserDetails;
