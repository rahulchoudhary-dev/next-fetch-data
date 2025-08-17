import Link from "next/link";
import ProductList from "./_components/productList";
import { Suspense } from "react";
import Loading from "../loading";

export const metadata = {
  title: "Our Products | My Store",
  description:
    "Browse our wide range of products including the latest tech gadgets, accessories, and more. Find what suits you best at My Store.",
  openGraph: {
    title: "Our Products | My Store",
    description:
      "Explore the full product catalog from My Store. From gadgets to accessories, discover the latest arrivals and best sellers.",
    url: "https://yourdomain.com/product",
    images: [
      {
        url: "https://via.placeholder.com/1200x630", // Replace with a real banner/catalog image
        width: 1200,
        height: 630,
        alt: "Our Product Catalog",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Our Products | My Store",
    description:
      "Check out the latest products available at My Store. Great deals, trending items, and more.",
    images: ["https://via.placeholder.com/1200x630"], // same as OG image
  },
};
const ProductPage = () => {
  return (
    <div className="p-6">
      <header className="flex justify-between items-center mb-4">
        <h1 className="text-2xl font-bold">Product Page</h1>
        <Link
          href="/"
          className="px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700 transition"
        >
          Back
        </Link>
      </header>

      <section>
        <p className="text-gray-700">
          Welcome to the product page! Here you can explore our latest products
          and details.
        </p>
      </section>
      <Suspense fallback={<Loading />}>
        <ProductList />
      </Suspense>
    </div>
  );
};

export default ProductPage;
