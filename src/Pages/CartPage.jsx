import React, { useContext } from "react";
import { CartContext } from "../context/CartContext";
import "./CartPage.css";

function CartPage() {
  const {
    cartItems,
    increaseQuantity,
    decreaseQuantity,
    removeFromCart,
    clearCart, 
  } = useContext(CartContext);

  const totalPrice = cartItems.reduce(
    (total, item) => total + item.price * item.quantity,
    0
  );

  return (
    <div className="cart-container" id="cart">
      <h1 className="cart-heading">🛒 Your Cart</h1>
      {cartItems.length === 0 ? (
        <p className="empty-cart">Your cart is empty.</p>
      
        
        
      ) : (
        <>
          <div className="cart-list">
            {cartItems.map((item) => (
              <div className="cart-item" key={item.id}>
                <img
                  src={item.image}
                  alt={item.name}
                  className="cart-item-image"
                />
                <div className="cart-item-details">
                  <h3>{item.name}</h3>
                  <p>Price: Rs {item.price}</p>
                  <div className="quantity-controls">
                    <button onClick={() => decreaseQuantity(item.id)}>-</button>
                    <span>{item.quantity}</span>
                    <button onClick={() => increaseQuantity(item.id)}>+</button>
                  </div>
                  <p>Total: Rs {item.price * item.quantity}</p>
                  <button
                    className="remove-btn"
                    onClick={() => removeFromCart(item.id)}
                  >
                    🗑️
                  </button>
                </div>
              </div>
            ))}
            <div className="cart-total">
              <h2>Total Price: Rs {totalPrice}</h2>
            </div>
          </div>

          {/* ✅ Clear All & Checkout Buttons */}
          <div className="cart-actions">
            <button className="clear-cart-btn" onClick={clearCart}>
              Clear All
            </button>
            <button className="checkout-btn" onClick={() => window.location.href = "/#checkout"}>
              Go to CheckOut
            </button>
          </div>
        </>
      )}
    </div>
  );
}

export default CartPage;
