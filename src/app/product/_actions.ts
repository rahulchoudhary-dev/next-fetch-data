export const getProducts = async (skip: number = 0) => {
  const res = await fetch(
    `https://dummyjson.com/products?limit=10&skip=${skip}`,
    { cache: "force-cache" }
  );

  if (!res.ok) {
    throw new Error("Failed to fetch products");
  }

  const data = await res.json();
  return data;
};
export const getProductDetails = async (slug: number = 1) => {
  const res = await fetch(`https://dummyjson.com/products/${slug}`, {
    cache: "force-cache",
  });

  if (!res.ok) {
    throw new Error("Failed to fetch products");
  }

  const data = await res.json();
  return data;
};
