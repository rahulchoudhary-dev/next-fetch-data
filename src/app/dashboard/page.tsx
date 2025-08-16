import Link from "next/link";

import DashBoardList from "./_components/dahboardList";
import { Suspense } from "react";
import Loading from "./loading";
import { Button } from "./_components/errorButton";

const DashBoardPage = async () => {
  return (
    <div className="p-8">
      <Link href={"/"} className="text-blue-600 underline">
        Back
      </Link>

      <Button />

      <header className="mb-6">
        <h1 className="text-2xl font-bold">Welcome to the DashBoard</h1>
        <p className="text-gray-600">Read the latest posts below.</p>
      </header>

      <h1 className="text-xl font-semibold mb-4">Dashboard</h1>
      <Suspense fallback={<Loading />}>
        <DashBoardList />
      </Suspense>
      {/* Grid layout: users left, posts right */}
    </div>
  );
};

export default DashBoardPage;
