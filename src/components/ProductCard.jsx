// ProductCard is a functional component that receives a single 'product' object via props
const ProductCard = ({ product }) => {
  return (
    // Card container with white background, rounded corners, shadow, padding and hover effect
    <div className="bg-white rounded-xl shadow-md p-4 hover:shadow-lg transition group">
      {/* Product image with full width, fixed height, and contained scaling */}
      <img
        src={product.image} // Image source from product data
        alt={product.name} // Alt text for accessibility
        className="w-full h-48 object-contain mb-4 group-hover:scale-115 transition-all duration-200"
      />

      {/* Product name/title */}
      <h2 className="text-xl font-semibold text-gray-800">{product.name}</h2>

      {/* Short description of the product */}
      <p className="text-gray-600 mt-2 text-sm">{product.description}</p>

      {/* Product price in green and bold */}
      <p className="text-green-600 font-bold mt-3">${product.price}</p>
    </div>
  );
};

// Exporting the ProductCard component so it can be imported and used in other files
export default ProductCard;
