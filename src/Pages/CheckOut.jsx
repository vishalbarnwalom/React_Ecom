import React, { useContext } from "react";
import { CartContext } from "../context/CartContext";
import "../Pages/Checkout.css"; 

function CheckoutPage() {
  const { cartItems } = useContext(CartContext);

  const totalPrice = cartItems.reduce(
    (total, item) => total + item.price * item.quantity,
    0
  );

  return (
    <div className="checkout-container" id="checkout">
      <div className="checkout-left">
        <h2>Customer Details</h2>
        <input type="text" placeholder="Full Name" />
        <input type="email" placeholder="Email Address" />
        <input type="text" placeholder="Phone Number" />

        <h2>Delivery Address</h2>
        <textarea placeholder="Enter your full delivery address" rows="5" />
      </div>

      <div className="checkout-right">
        <h2>Order Summary</h2>
        {cartItems.map((item) => (
          <div key={item.id} className="checkout-item">
            <p>{item.name} (item-price {item.price} * quantity {item.quantity})</p>
            <p>Rs {item.price * item.quantity}</p>
          </div>
        ))}
        <h3>Total: Rs {totalPrice}</h3>

        <div className="checkout-buttons">
          <button className="pay-now">Pay Now</button>
          <button className="cod">Pay by COD</button>
        </div>
      </div>
    </div>
  );
}

export default CheckoutPage;
