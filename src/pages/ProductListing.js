// src/pages/ProductListing.js
import React, { useState } from 'react';
import ProductCard from '../components/ProductCard';
import laptopImage from '../components/laptop.png';
import phoneImage from '../components/phone.png';
import cameraImage from '../components/camera.png';

// Product data
const products = [
  { id: 1, name: 'Laptop', price: 1000, image: laptopImage },
  { id: 2, name: 'Phone', price: 500, image: phoneImage },
  { id: 3, name: 'Camera', price: 800, image: cameraImage },
];

const ProductListing = ({ addToCart }) => {
  const [sortBy, setSortBy] = useState(''); // State to store sorting option

  // Function to sort products based on selected criteria
  const sortedProducts = [...products].sort((a, b) => {
    if (sortBy === 'price') return a.price - b.price; // Sort by price (ascending)
    if (sortBy === 'name') return a.name.localeCompare(b.name); // Sort by name (alphabetical)
    return 0; // Default (no sorting)
  });

  return (
    <div>
      <div className="sort-container">
        <label htmlFor="sort">Sort By: </label>
        <select id="sort" onChange={(e) => setSortBy(e.target.value)}>
          <option value="">Select</option>
          <option value="price">Price</option>
          <option value="name">Name</option>
        </select>
      </div>

      <div className="product-listing">
        {sortedProducts.map((product) => (
          <ProductCard key={product.id} product={product} addToCart={addToCart} />
        ))}
      </div>
    </div>
  );
};

export default ProductListing;
