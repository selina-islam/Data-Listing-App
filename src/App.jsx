// Importing the ProductCard component which will display each laptop
import ProductCard from "./components/ProductCard";

// An array of Acer laptops with their details (id, name, description, price, image)
const acerLaptops = [
  {
    id: 1,
    name: "Acer Aspire 5",
    description: "15.6” Full HD, AMD Ryzen 5, 8GB RAM, 256GB SSD.",
    price: 499,
    image: "/AcerAspire5.jpeg",
  },
  {
    id: 2,
    name: "Acer Swift 3",
    description: "14” FHD, Intel Core i5, 8GB RAM, 512GB SSD.",
    price: 649,
    image: "/AcerSwift3.jpeg",
  },
  {
    id: 3,
    name: "Acer Nitro 5",
    description: "Gaming Laptop, Intel i7, 16GB RAM, RTX 3050.",
    price: 899,
    image: "/AcerNitro5.jpeg",
  },
  {
    id: 4,
    name: "Acer Chromebook 314",
    description: "14” HD, Intel Celeron, 4GB RAM, 64GB eMMC.",
    price: 229,
    image: "/AcerChromebook314.jpeg",
  },
];

// Main App component
function App() {
  return (
    // Full-screen container with padding and light gray background
    <div className="min-h-screen bg-gray-100 p-6">
      {/* Page title */}
      <h1 className="text-3xl font-bold text-center text-blue-700 mb-6">
        🔰 Acer Laptop Listings
      </h1>

      {/* Grid layout for displaying products, responsive for different screen sizes */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
        {/* Loop through the acerLaptops array and render a ProductCard for each item */}
        {acerLaptops.map((laptop) => (
          <ProductCard key={laptop.id} product={laptop} />
        ))}
      </div>
    </div>
  );
}

// Exporting the App component so it can be used in index.js or main.jsx
export default App;
