import { Suspense } from "react";
import UserList from "./userList";
import PostList from "./postsList";
import { fetchPosts, fetchUsers } from "../_actions";

const DashBoardList = async () => {
  const usersPromise = fetchUsers();
  const postsPromise = fetchPosts();

  // Run in parallel
  const [usersList, postsList] = await Promise.allSettled([
    usersPromise,
    postsPromise,
  ]);

  // Extract values safely
  const users = usersList.status === "fulfilled" ? usersList.value : [];
  const posts = postsList.status === "fulfilled" ? postsList.value : [];

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
      {/* Users */}

      <UserList users={users} />

      <PostList posts={posts} />

      {/* Posts */}
    </div>
  );
};

export default DashBoardList;
