// src/pages/CartPage.js
import React from 'react';
import Cart from '../components/Cart';

const CartPage = ({ cart, updateQuantity, removeFromCart }) => {
  // Calculate the total price dynamically
  const totalPrice = cart.reduce((acc, item) => acc + item.price * item.quantity, 0);

  return (
    <div>
      <h1>Your Cart</h1>

      {/* Render cart items */}
      <Cart cart={cart} updateQuantity={updateQuantity} removeFromCart={removeFromCart} />

      {/* Display total price */}
      <h2>Total: ${totalPrice.toFixed(2)}</h2>
    </div>
  );
};

export default CartPage;
