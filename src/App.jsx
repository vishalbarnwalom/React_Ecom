import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Collection from '../src/Components/ProductCollection/Collection';
import ProductPage from './Pages/ProductPage';
import CartPage from './Pages/CartPage';
import Nav from './Components/Navbar/Nav';
import { CartProvider } from "./context/CartContext";
import CheckoutPage from './Pages/CheckOut';



function App() {
  return (
    
        <CartProvider>
      <Router>
          <Nav />
        <Routes>
          <Route path="/" element={<Collection />} />
          <Route path="/product/:id" element={<ProductPage />} />
          <Route path="/checkout" element={<CheckoutPage />} />
        </Routes>
        <CartPage />
        <CheckoutPage />
      </Router>
   </CartProvider>
  );
}

export default App;
