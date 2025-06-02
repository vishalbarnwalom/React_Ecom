import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Collection from './components/ProductCollection/Collection';
import ProductPage from './Pages/ProductPage';
import CartPage from './Pages/CartPage';
import Nav from './Components/Navbar/Nav';
import { CartProvider } from './context/CartContext'; // 👈 Import this

function App() {
  return (
    <CartProvider> {/* 👈 Wrap your app in CartProvider */}
      <Router>
        <Nav />
        <Routes>
          <Route path="/" element={<Collection />} />
          <Route path="/product/:id" element={<ProductPage />} />
          <Route path="/cart" element={<CartPage />} />
        </Routes>
      </Router>
    </CartProvider>
  );
}

export default App;
