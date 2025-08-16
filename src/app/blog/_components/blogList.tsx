type Blog = {
  id: number;
  title: string;
  content: string;
  author: string;
  date: string;
  category: string;
};

export default async function BlogList() {
  const result = await fetch("https://api.vercel.app/blog?page=1&limit=10", {
    cache: "force-cache",
  });
  const blogs = await result.json();
  return (
    <div className="p-6 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
      {blogs.map((post: Blog) => (
        <div
          key={post.id}
          className="border rounded-2xl p-4 shadow-md hover:shadow-lg transition"
        >
          <h2 className="text-xl text-black font-semibold mb-2">
            {post.id} {post.title}
          </h2>
          <p className="text-gray-600 text-sm mb-3">
            {post.content.slice(0, 100)}...
          </p>
          <div className="text-sm text-gray-500 space-y-1">
            <p>
              <span className="font-medium">Author:</span> {post.author}
            </p>
            <p>
              <span className="font-medium">Date:</span> {post.date}
            </p>
            <p>
              <span className="font-medium">Category:</span> {post.category}
            </p>
          </div>
        </div>
      ))}
    </div>
  );
}
