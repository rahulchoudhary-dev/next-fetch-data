import Link from "next/link";
import { Suspense } from "react";
import ProductDetailsPage from "../_components/productDetails";
import Loading from "@/app/loading";
import { getProductDetails } from "../_actions";

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;

  const product = await getProductDetails(Number(slug));

  if (!product) {
    return {
      title: "Product Not Found",
      description: "The product you are looking for does not exist.",
    };
  }

  return {
    title: `${product.title} | My Store`,
    description: product.description,
    openGraph: {
      images: [`/product/${slug}/opengraph-image`],
    },
  };
}

const ProductDetails = async ({
  params,
}: {
  params: Promise<{ slug: string }>;
}) => {
  const { slug } = await params;

  return (
    <div className="p-4">
      {/* Header Section */}
      <header className="flex items-center justify-between border-b pb-3 mb-4">
        <Link href="/product" className="text-blue-600 hover:underline">
          ← Back
        </Link>
        <h1 className="text-xl font-bold">Product Details</h1>
        <div /> {/* empty div to keep spacing balanced */}
      </header>

      {/* Suspense Wrapper for Product Details */}
      <Suspense fallback={<Loading />}>
        <ProductDetailsPage slug={slug} />
      </Suspense>
    </div>
  );
};

export default ProductDetails;
