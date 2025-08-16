import Image from "next/image";
import { getProductDetails } from "../_actions";

const ProductDetailsPage = async ({ slug }: { slug: string }) => {
  const product = await getProductDetails(Number(slug));

  if (!product) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 flex items-center justify-center">
        <div className="text-center">
          <div className="w-24 h-24 mx-auto mb-6 bg-gradient-to-r from-red-500 to-pink-500 rounded-full flex items-center justify-center">
            <span className="text-4xl">❌</span>
          </div>
          <h2 className="text-3xl font-bold text-white mb-2">
            Product Not Found
          </h2>
          <p className="text-gray-300">
            The product you're looking for doesn't exist.
          </p>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
      {/* Hero Section */}
      <div className="relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-purple-600/20 to-pink-600/20 backdrop-blur-3xl"></div>
        <div className="relative px-6 py-12 sm:px-8 lg:px-12">
          <div className="mx-auto max-w-7xl">
            {/* Breadcrumb */}
            <nav className="mb-8">
              <div className="flex items-center space-x-2 text-sm">
                <span className="text-gray-400">Products</span>
                <span className="text-gray-500">›</span>
                <span className="text-purple-300">{product.category}</span>
                <span className="text-gray-500">›</span>
                <span className="text-white font-medium">{product.title}</span>
              </div>
            </nav>

            {/* Header */}
            <div className="text-center mb-12">
              <h1 className="text-5xl font-bold bg-gradient-to-r from-white via-purple-200 to-pink-200 bg-clip-text text-transparent mb-4">
                {product.title}
              </h1>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed">
                {product.description}
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div className="px-6 pb-12 sm:px-8 lg:px-12">
        <div className="mx-auto max-w-7xl mt-4">
          {/* Main Product Grid */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-12">
            {/* Image Gallery */}
            <div className="space-y-6">
              {/* Main Image */}
              <div className="relative group">
                <div className="aspect-square bg-white/5 backdrop-blur-sm rounded-3xl border border-white/10 overflow-hidden">
                  <Image
                    src={product.thumbnail}
                    alt={product.title}
                    width={600}
                    height={600}
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                  />
                </div>

                {/* Discount Badge */}
                {product.discountPercentage > 0 && (
                  <div className="absolute top-6 left-6 bg-gradient-to-r from-red-500 to-pink-500 text-white px-4 py-2 rounded-full font-bold text-lg shadow-lg">
                    -{product.discountPercentage}% OFF
                  </div>
                )}
              </div>

              {/* Thumbnail Gallery */}
              <div className="grid grid-cols-4 gap-4">
                {product.images.map((img: string, idx: number) => (
                  <div
                    key={idx}
                    className="aspect-square bg-white/5 backdrop-blur-sm rounded-xl border border-white/10 overflow-hidden hover:border-white/30 transition-all duration-300 cursor-pointer group"
                  >
                    <Image
                      src={img}
                      alt={`${product.title}-${idx}`}
                      width={150}
                      height={150}
                      className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                    />
                  </div>
                ))}
              </div>
            </div>

            {/* Product Details */}
            <div className="space-y-8">
              {/* Price Section */}
              <div className="bg-white/5 backdrop-blur-sm rounded-2xl border border-white/10 p-8">
                <div className="flex items-center gap-4 mb-4">
                  <span className="text-4xl font-bold text-white">
                    ${product.price}
                  </span>
                  {product.discountPercentage > 0 && (
                    <span className="text-xl text-gray-400 line-through">
                      $
                      {(
                        product.price /
                        (1 - product.discountPercentage / 100)
                      ).toFixed(2)}
                    </span>
                  )}
                </div>

                <div className="flex items-center gap-6 mb-6">
                  <div className="flex items-center gap-2">
                    <div className="flex text-yellow-400">
                      {[...Array(5)].map((_, i) => (
                        <span
                          key={i}
                          className={
                            i < Math.floor(product.rating)
                              ? "text-yellow-400"
                              : "text-gray-600"
                          }
                        >
                          ⭐
                        </span>
                      ))}
                    </div>
                    <span className="text-white font-semibold">
                      {product.rating}
                    </span>
                  </div>
                  <div className="h-4 w-px bg-gray-600"></div>
                  <div className="text-sm">
                    <span className="text-gray-400">Stock: </span>
                    <span
                      className={`font-semibold ${
                        product.stock > 10
                          ? "text-green-400"
                          : product.stock > 0
                          ? "text-yellow-400"
                          : "text-red-400"
                      }`}
                    >
                      {product.stock > 0
                        ? `${product.stock} available`
                        : "Out of stock"}
                    </span>
                  </div>
                </div>

                <button className="w-full bg-gradient-to-r from-purple-600 to-pink-600 text-white font-bold py-4 px-8 rounded-xl hover:from-purple-700 hover:to-pink-700 transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-purple-500/25">
                  Add to Cart
                </button>
              </div>

              {/* Product Specifications */}
              <div className="bg-white/5 backdrop-blur-sm rounded-2xl border border-white/10 p-8">
                <h3 className="text-2xl font-bold text-white mb-6">
                  Product Details
                </h3>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                  <div className="space-y-4">
                    <div className="flex justify-between">
                      <span className="text-gray-400">Category:</span>
                      <span className="text-white font-medium">
                        {product.category}
                      </span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-gray-400">Brand:</span>
                      <span className="text-white font-medium">
                        {product.brand}
                      </span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-gray-400">SKU:</span>
                      <span className="text-white font-mono text-sm">
                        {product.sku}
                      </span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-gray-400">Weight:</span>
                      <span className="text-white font-medium">
                        {product.weight}g
                      </span>
                    </div>
                  </div>

                  <div className="space-y-4">
                    <div className="flex justify-between">
                      <span className="text-gray-400">Availability:</span>
                      <span className="text-green-400 font-medium">
                        {product.availabilityStatus}
                      </span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-gray-400">Min Order:</span>
                      <span className="text-white font-medium">
                        {product.minimumOrderQuantity}
                      </span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-gray-400">Dimensions:</span>
                      <span className="text-white font-medium text-sm">
                        {product.dimensions.width} × {product.dimensions.height}{" "}
                        × {product.dimensions.depth} cm
                      </span>
                    </div>
                  </div>
                </div>
              </div>

              {/* Shipping & Warranty */}
              <div className="bg-white/5 backdrop-blur-sm rounded-2xl border border-white/10 p-8">
                <h3 className="text-2xl font-bold text-white mb-6">
                  Shipping & Support
                </h3>

                <div className="space-y-4">
                  <div className="flex items-start gap-4">
                    <div className="w-8 h-8 bg-blue-500/20 rounded-lg flex items-center justify-center flex-shrink-0">
                      <span className="text-blue-400">🚚</span>
                    </div>
                    <div>
                      <p className="text-white font-medium">
                        Shipping Information
                      </p>
                      <p className="text-gray-300 text-sm">
                        {product.shippingInformation}
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start gap-4">
                    <div className="w-8 h-8 bg-green-500/20 rounded-lg flex items-center justify-center flex-shrink-0">
                      <span className="text-green-400">🛡️</span>
                    </div>
                    <div>
                      <p className="text-white font-medium">Warranty</p>
                      <p className="text-gray-300 text-sm">
                        {product.warrantyInformation}
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start gap-4">
                    <div className="w-8 h-8 bg-purple-500/20 rounded-lg flex items-center justify-center flex-shrink-0">
                      <span className="text-purple-400">↩️</span>
                    </div>
                    <div>
                      <p className="text-white font-medium">Return Policy</p>
                      <p className="text-gray-300 text-sm">
                        {product.returnPolicy}
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Meta Information */}
              <div className="bg-white/5 backdrop-blur-sm rounded-2xl border border-white/10 p-8">
                <h3 className="text-2xl font-bold text-white mb-6">
                  Product Information
                </h3>

                <div className="flex items-center justify-between">
                  <div>
                    <p className="text-gray-400 text-sm">Barcode</p>
                    <p className="text-white font-mono text-sm">
                      {product.meta.barcode}
                    </p>
                  </div>
                  <div className="bg-white p-2 rounded-lg">
                    <Image
                      src={product.meta.qrCode}
                      alt="QR Code"
                      width={80}
                      height={80}
                      className="rounded"
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Tags Section */}
          <div className="mb-12">
            <h3 className="text-2xl font-bold text-white mb-6">Tags</h3>
            <div className="flex flex-wrap gap-3">
              {product.tags.map((tag: string, idx: number) => (
                <span
                  key={idx}
                  className="bg-gradient-to-r from-purple-600/20 to-pink-600/20 border border-purple-500/30 text-purple-200 px-4 py-2 rounded-full text-sm font-medium hover:from-purple-600/30 hover:to-pink-600/30 transition-all duration-300 cursor-pointer"
                >
                  #{tag}
                </span>
              ))}
            </div>
          </div>

          {/* Reviews Section */}
          <div className="bg-white/5 backdrop-blur-sm rounded-2xl border border-white/10 p-8">
            <h2 className="text-3xl font-bold text-white mb-8">
              Customer Reviews
            </h2>

            {product.reviews.length > 0 ? (
              <div className="space-y-6">
                {product.reviews.map((review: any, idx: number) => (
                  <div
                    key={idx}
                    className="bg-white/5 rounded-xl p-6 border border-white/10"
                  >
                    <div className="flex items-center justify-between mb-4">
                      <div className="flex items-center gap-3">
                        <div className="w-12 h-12 bg-gradient-to-r from-purple-600 to-pink-600 rounded-full flex items-center justify-center">
                          <span className="text-white font-bold text-lg">
                            {review.reviewerName.charAt(0).toUpperCase()}
                          </span>
                        </div>
                        <div>
                          <p className="text-white font-semibold">
                            {review.reviewerName}
                          </p>
                          <p className="text-gray-400 text-sm">
                            {new Date(review.date).toLocaleDateString("en-US", {
                              year: "numeric",
                              month: "long",
                              day: "numeric",
                            })}
                          </p>
                        </div>
                      </div>
                      <div className="flex items-center gap-1">
                        {[...Array(5)].map((_, i) => (
                          <span
                            key={i}
                            className={
                              i < review.rating
                                ? "text-yellow-400"
                                : "text-gray-600"
                            }
                          >
                            ⭐
                          </span>
                        ))}
                      </div>
                    </div>
                    <p className="text-gray-300 italic leading-relaxed">
                      "{review.comment}"
                    </p>
                  </div>
                ))}
              </div>
            ) : (
              <div className="text-center py-12">
                <div className="w-16 h-16 bg-gray-600/20 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-2xl">💬</span>
                </div>
                <p className="text-gray-400 text-lg">No reviews yet</p>
                <p className="text-gray-500 text-sm mt-2">
                  Be the first to review this product!
                </p>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductDetailsPage;
