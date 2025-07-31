
import React from 'react';
import { Routes, Route, Link } from 'react-router-dom';
import Home from './pages/Home';
import Menu from './pages/Menu';
import Cart from './pages/Cart';
import Checkout from './pages/Checkout';
import Confirmation from './pages/Confirmation';
import NotFound from './pages/NotFound';
import { useCart } from './context/CartContext';

const App = () => {
  const { cart } = useCart();
  const totalItems = cart.reduce((sum, item) => sum + item.quantity, 0);

  return (
    <div>
      <nav style={{ padding: '1rem', background: '#ff5a5f' }}>
        <Link to="/" style={{ marginRight: '1rem', color: '#fff' }}>Home</Link>
        <Link to="/menu" style={{ marginRight: '1rem', color: '#fff' }}>Menu</Link>
        <Link to="/cart" style={{ color: '#fff' }}>Cart ({totalItems})</Link>
      </nav>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/menu" element={<Menu />} />
        <Route path="/cart" element={<Cart />} />
        <Route path="/checkout" element={<Checkout />} />
        <Route path="/confirmation" element={<Confirmation />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </div>
  );
};

export default App;
