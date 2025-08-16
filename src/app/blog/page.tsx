import Link from "next/link";

import Posts from "@/components/blogList";

const BlogPage = async () => {
  const result = await fetch("https://api.vercel.app/blog", {
    cache: "force-cache",
  });
  const blogs = await result.json();
  return (
    <ul>
      <Link href={"/"}>Back</Link>
      <Posts posts={blogs} />
    </ul>
  );
};

export default BlogPage;
