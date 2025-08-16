export const fetchUsers = async () => {
  const res = await fetch("https://jsonplaceholder.typicode.com/users", {
    cache: "force-cache", // or { next: { revalidate: 60 } } for ISR
  });

  if (!res.ok) {
    throw new Error("Failed to fetch users");
  }
  // await new Promise((resolve, reject) => setTimeout(resolve, 5000));

  return res.json();
};

export const fetchPosts = async () => {
  const res = await fetch("https://jsonplaceholder.typicode.com/posts", {
    cache: "force-cache",
  });

  if (!res.ok) {
    throw new Error("Failed to fetch posts");
  }
  // await new Promise((resolve, reject) => setTimeout(resolve, 5000));

  return res.json();
};
