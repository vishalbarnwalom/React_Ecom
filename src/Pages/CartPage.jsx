// Pages/CartPage.jsx
import React, { useContext } from "react";
import { CartContext } from "../context/CartContext";
import "./CartPage.css"; // create CSS file for styling

function CartPage() {
  const { cartItems, removeFromCart } = useContext(CartContext);

  const getTotalPrice = () => {
    return cartItems.reduce(
      (total, item) => total + item.price * item.quantity,
      0
    );
  };

  return (
    <div className="cart-page">
      <h1>Your Cart 🛒</h1>

      {cartItems.length === 0 ? (
        <p>Your cart is empty.</p>
      ) : (
        <div className="cart-items">
          {cartItems.map((item) => (
            <div key={item.id} className="cart-item">
              <img src={item.image} alt={item.name} width="100" />
              <div className="cart-info">
                <h3>{item.name}</h3>
                <p>Price: ₹{item.price}</p>
                <p>Quantity: {item.quantity}</p>
                <p>Subtotal: ₹{item.price * item.quantity}</p>
                <button onClick={() => removeFromCart(item.id)}>Remove ❌</button>
              </div>
            </div>
          ))}
          <hr />
          <h2>Total Price: ₹{getTotalPrice()}</h2>
        </div>
      )}
    </div>
  );
}

export default CartPage;
