import Link from "next/link";
import ProductList from "./_components/productList";
import { Suspense } from "react";
import Loading from "../loading";

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
