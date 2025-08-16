"use client";
import Link from "next/link";
import { useRouter } from "next/navigation";

const ViewProfile = ({ id }: { id: string }) => {
  const router = useRouter();
  return (
    <div className="pt-4 border-t border-white/10">
      <Link
        href={`/user/${id}`}
        prefetch={false}
        onMouseEnter={() => router.prefetch(`/user/${id}`)}
        className="block w-full bg-gradient-to-r from-purple-600 to-pink-600 text-white text-center py-3 rounded-xl font-semibold hover:from-purple-700 hover:to-pink-700 transition-all duration-300 transform hover:scale-105 shadow-lg group-hover:shadow-purple-500/25"
      >
        View Profile →
      </Link>
    </div>
  );
};

export default ViewProfile;
