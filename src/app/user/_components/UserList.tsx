import { getUsers } from "@/app/user/_actions";
import Link from "next/link";

export default async function UserList() {
  const users = await getUsers();
  // await new Promise((resolve, reject) => setTimeout(resolve, 5000));
  console.log("Run again");
  return (
    <ul className="space-y-4">
      {users.map((user) => (
        <li key={user.id} className="rounded-lg border p-4 shadow">
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
          <p>
            <Link
              href={`/user/${user.id}`}
              className="font-semibold text-blue-500 underline"
            >
              See More →
            </Link>
          </p>
        </li>
      ))}
    </ul>
  );
}
