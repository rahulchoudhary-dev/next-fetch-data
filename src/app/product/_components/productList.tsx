"use client";

import Image from "next/image";
import { getProducts } from "../_actions";
import { notFound, useRouter } from "next/navigation";
import { useEffect, useState } from "react";
import Link from "next/link";

const ProductList = () => {
  const router = useRouter();
  const [products, setProducts] = useState<any[]>([]);
  const [page, setPage] = useState(0);
  const [loading, setLoading] = useState(false);
  const [hasMore, setHasMore] = useState(true);

  // Initial + load more fetch
  const fetchProducts = async (skip: number) => {
    setLoading(true);
    try {
      const data = await getProducts(skip);
      if (!data || !data.products) {
        notFound();
      }

      if (data.products.length === 0) {
        setHasMore(false);
      } else {
        setProducts((prev) => [...prev, ...data.products]);
      }
    } catch (err) {
      console.error("Failed to load products:", err);
      setHasMore(false);
    }
    setLoading(false);
  };

  // Fetch on first load
  useEffect(() => {
    if (page == 0) {
      fetchProducts(page);
    }
  }, [page == 0]);

  // Infinite scroll
  useEffect(() => {
    const handleScroll = () => {
      if (
        window.innerHeight + window.scrollY >=
          document.body.offsetHeight - 200 &&
        !loading &&
        hasMore
      ) {
        const nextSkip = page + 10;
        setPage(nextSkip);
        fetchProducts(nextSkip);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [loading, page, hasMore]);

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
      {/* Header Section */}
      <div className="relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-purple-600/20 to-pink-600/20 backdrop-blur-3xl"></div>
        <div className="relative px-6 py-16 sm:px-8 lg:px-12">
          <div className="mx-auto max-w-7xl">
            <div className="text-center">
              <h1 className="text-5xl font-bold bg-gradient-to-r from-white via-purple-200 to-pink-200 bg-clip-text text-transparent mb-4">
                Discover Amazing Products
              </h1>
              <p className="text-xl text-gray-300 max-w-2xl mx-auto">
                Explore our curated collection of premium products with
                unbeatable prices and quality
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Products Grid */}
      <div className="px-2 ">
        <div className="p-6">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-6 gap-8">
            {products.map((product: any, index) => (
              <div
                key={index}
                className="group relative bg-white/5 backdrop-blur-sm rounded-2xl border border-white/10 overflow-hidden hover:bg-white/10 hover:border-white/20 transition-all duration-500 hover:scale-105 hover:shadow-2xl hover:shadow-purple-500/25"
              >
                {/* Product Image */}
                <div className="relative overflow-hidden rounded-t-2xl">
                  <Image
                    src={product.thumbnail}
                    alt={product.title}
                    width={400}
                    height={300}
                    className="w-full h-64 object-cover transition-transform duration-700 group-hover:scale-110"
                    placeholder="blur"
                    blurDataURL="/placeholder.png"
                    loading="lazy"
                  />

                  {/* Discount Badge */}
                  {product.discountPercentage > 0 && (
                    <div className="absolute top-4 left-4 bg-gradient-to-r from-red-500 to-pink-500 text-white px-3 py-1 rounded-full text-sm font-semibold shadow-lg">
                      -{product.discountPercentage}%
                    </div>
                  )}

                  {/* Rating Badge */}
                  <div className="absolute top-4 right-4 bg-black/50 backdrop-blur-sm text-white px-2 py-1 rounded-full text-sm flex items-center gap-1">
                    <span className="text-yellow-400">⭐</span>
                    {product.rating}
                  </div>

                  {/* Overlay on hover */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <div className="absolute bottom-4 left-4 right-4">
                      <Link
                        href={`product/${product.id}`}
                        prefetch={false}
                        onMouseEnter={() =>
                          router.prefetch(`product/${product.id}`)
                        }
                        className="block w-full bg-gradient-to-r from-purple-600 to-pink-600 text-white text-center py-3 rounded-xl font-semibold hover:from-purple-700 hover:to-pink-700 transition-all duration-300 transform hover:scale-105 shadow-lg"
                      >
                        View Details
                      </Link>
                    </div>
                  </div>
                </div>

                {/* Product Info */}
                <div className="p-6 space-y-4">
                  {/* Title and Category */}
                  <div>
                    <h3 className="text-xl font-bold text-white mb-2 line-clamp-2 group-hover:text-purple-200 transition-colors">
                      {product.title}
                    </h3>
                    <p className="text-sm text-purple-300 font-medium bg-purple-500/20 px-3 py-1 rounded-full inline-block">
                      {product.category}
                    </p>
                  </div>

                  {/* Description */}
                  <p className="text-gray-300 text-sm line-clamp-3 leading-relaxed">
                    {product.description}
                  </p>

                  {/* Price Section */}
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-2">
                      <span className="text-2xl font-bold text-white">
                        ${product.price}
                      </span>
                      {product.discountPercentage > 0 && (
                        <span className="text-sm text-gray-400 line-through">
                          $
                          {(
                            product.price /
                            (1 - product.discountPercentage / 100)
                          ).toFixed(2)}
                        </span>
                      )}
                    </div>
                    <div className="text-right">
                      <p className="text-sm text-gray-400">Stock</p>
                      <p className="text-sm font-semibold text-green-400">
                        {product.stock}
                      </p>
                    </div>
                  </div>

                  {/* Brand and Additional Info */}
                  <div className="grid grid-cols-2 gap-4 pt-4 border-t border-white/10">
                    <div>
                      <p className="text-xs text-gray-400 uppercase tracking-wide">
                        Brand
                      </p>
                      <p className="text-sm font-semibold text-white">
                        {product.brand}
                      </p>
                    </div>
                    <div>
                      <p className="text-xs text-gray-400 uppercase tracking-wide">
                        Warranty
                      </p>
                      <p className="text-sm text-gray-300 truncate">
                        {product.warrantyInformation}
                      </p>
                    </div>
                  </div>

                  {/* Expandable Details */}
                  <details className="group/details">
                    <summary className="cursor-pointer text-sm text-purple-300 hover:text-purple-200 transition-colors list-none flex items-center justify-between">
                      <span>More Details</span>
                      <span className="transform transition-transform group-open/details:rotate-180">
                        ▼
                      </span>
                    </summary>
                    <div className="mt-4 space-y-3 text-sm">
                      <div className="grid grid-cols-1 gap-2">
                        <div className="flex justify-between">
                          <span className="text-gray-400">Shipping:</span>
                          <span className="text-gray-300">
                            {product.shippingInformation}
                          </span>
                        </div>
                        <div className="flex justify-between">
                          <span className="text-gray-400">Return Policy:</span>
                          <span className="text-gray-300">
                            {product.returnPolicy}
                          </span>
                        </div>
                        {product.meta?.barcode && (
                          <div className="flex justify-between">
                            <span className="text-gray-400">Barcode:</span>
                            <span className="text-gray-300 font-mono text-xs">
                              {product.meta.barcode}
                            </span>
                          </div>
                        )}
                      </div>

                      {/* QR Code */}
                      {product.meta?.qrCode && (
                        <div className="flex justify-center pt-2">
                          <Image
                            placeholder="blur"
                            blurDataURL="/placeholder.png"
                            src={product.meta.qrCode}
                            alt="QR Code"
                            width={80}
                            height={80}
                            className="rounded-lg border border-white/20"
                            loading="lazy"
                          />
                        </div>
                      )}

                      {/* Additional Images */}
                      {product.images && product.images.length > 1 && (
                        <div className="pt-3">
                          <p className="text-xs text-gray-400 uppercase tracking-wide mb-2">
                            Gallery
                          </p>
                          <div className="grid grid-cols-3 gap-2">
                            {product.images
                              .slice(1, 4)
                              .map((img: string, idx: number) => (
                                <Image
                                  key={idx}
                                  src={img}
                                  alt={`${product.title}-${idx}`}
                                  width={100}
                                  height={100}
                                  loading="lazy"
                                  className="rounded-lg object-cover aspect-square border border-white/10 hover:border-white/30 transition-colors"
                                />
                              ))}
                          </div>
                        </div>
                      )}
                    </div>
                  </details>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Loading State */}
      {loading && (
        <div className="flex justify-center items-center py-12">
          <div className="relative">
            <div className="w-12 h-12 border-4 border-purple-200/30 border-t-purple-500 rounded-full animate-spin"></div>
            <div className="absolute inset-0 w-12 h-12 border-4 border-transparent border-t-pink-500 rounded-full animate-spin animation-delay-150"></div>
          </div>
          <p className="ml-4 text-white font-medium">
            Loading amazing products...
          </p>
        </div>
      )}

      {/* End State */}
      {!hasMore && products.length > 0 && (
        <div className="text-center py-12">
          <div className="inline-flex items-center justify-center w-16 h-16 bg-gradient-to-r from-purple-600 to-pink-600 rounded-full mb-4">
            <span className="text-2xl">🎉</span>
          </div>
          <p className="text-gray-300 text-lg">
            You've seen all our amazing products!
          </p>
          <p className="text-gray-400 text-sm mt-2">
            Check back later for new arrivals
          </p>
        </div>
      )}
    </div>
  );
};

export default ProductList;
