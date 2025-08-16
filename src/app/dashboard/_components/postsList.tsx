const PostList = ({ posts }: any) => {
  return (
    <div>
      <h2 className="text-lg font-bold mb-2">Posts</h2>
      <ul className="space-y-2">
        {posts.slice(0, 5).map((post: any) => (
          <li key={post.id} className="rounded border p-2 shadow">
            <strong>{post.title}</strong>
            <p className="text-sm text-gray-600">{post.body}</p>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default PostList;
