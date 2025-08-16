import Link from "next/link";
import { getUserDetailsDb } from "../_actions";
import { unstable_cache } from "next/cache";
import { notFound } from "next/navigation";

const UserDetails = async ({ params }: { params: Promise<{ id: string }> }) => {
  const { id } = await params;

  const getUserDetailsCached = unstable_cache(
    async (id: number) => {
      return getUserDetailsDb(id); // your DB call
    },
    [id], // cache key (must be unique)
    {
      // revalidate: 60, // revalidate every 60 seconds
    }
  );
  const user = await getUserDetailsCached(Number(id));

  console.log("user", user);
  //   await new Promise((resolve, reject) => setTimeout(resolve, 5000));
  if (!user) {
    notFound();
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
