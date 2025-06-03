import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Collection from '../src/Components/ProductCollection/Collection';
import ProductPage from './Pages/ProductPage';
import CartPage from './Pages/CartPage';
import Nav from './Components/Navbar/Nav';
import { CartProvider } from "./context/CartContext";



function App() {
  return (
    
        <CartProvider>
      <Router>
          <Nav />
        <Routes>
          <Route path="/" element={<Collection />} />
          <Route path="/product/:id" element={<ProductPage />} />
          <Route path="/cart" element={<CartPage />} />
        </Routes>
        <CartPage />
      </Router>
   </CartProvider>
  );
}

export default App;
