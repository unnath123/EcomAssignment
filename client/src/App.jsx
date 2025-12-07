import React, { useState, useEffect } from 'react';
import { Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Home from './pages/Home';
import ProductDetails from './pages/ProductDetails';
import Cart from './pages/Cart';

function App() {
  const [cartCount, setCartCount] = useState(0);

  const updateCartCount = () => {
    fetch('http://localhost:5000/api/cart')
      .then(res => res.json())
      .then(data => {
        const count = data.reduce((sum, item) => sum + item.quantity, 0);
        setCartCount(count);
      })
      .catch(err => console.error('Error fetching cart count:', err));
  };

  useEffect(() => {
    updateCartCount();

    // Listen for cart updates
    window.addEventListener('cartUpdated', updateCartCount);

    return () => {
      window.removeEventListener('cartUpdated', updateCartCount);
    };
  }, []);

  return (
    <div className="min-h-screen bg-gray-50 font-sans flex flex-col">
      <Navbar cartCount={cartCount} />
      <main className="flex-grow">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/product/:id" element={<ProductDetails />} />
          <Route path="/cart" element={<Cart />} />
        </Routes>
      </main>
      <Footer />
    </div>
  );
}

export default App;
