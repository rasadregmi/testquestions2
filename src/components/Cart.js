// src/components/Cart.js
import React from 'react';

const Cart = ({ cart, updateQuantity, removeFromCart }) => (
  <div className="cart">
    {cart.length === 0 ? (
      <p>Your cart is empty</p>
    ) : (
      <ul>
        {cart.map((item) => (
          <li key={item.id}>
            <img src={item.image} alt={item.name} style={{ width: '50px' }} />
            <div>{item.name}</div>
            <div>Price: ${item.price}</div>
            <div>
              Quantity:
              <input
                type="number"
                value={item.quantity}
                min="1"
                onChange={(e) => updateQuantity(item.id, parseInt(e.target.value, 10))}
              />
            </div>
            <button onClick={() => removeFromCart(item.id)}>Remove</button>
          </li>
        ))}
      </ul>
    )}
  </div>
);

export default Cart;
