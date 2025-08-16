"use client";
import { use } from "react";

export default function Posts({ posts }: { posts: any }) {
  // const allPosts = use(posts);

  return (
    <ul>
      {posts.map((post: any) => (
        <li key={post.id}>{post.title}</li>
      ))}
    </ul>
  );
}
