
import React from 'react';
import { useNavigate } from 'react-router-dom';
import { useCart } from '../context/CartContext';

const Checkout = () => {
  const { cart, clearCart } = useCart();
  const navigate = useNavigate();
  const total = cart.reduce((sum, item) => sum + item.price * item.quantity, 0);

  const handlePlaceOrder = () => {
    clearCart();
    navigate('/confirmation');
  };

  return (
    <div style={{ padding: '2rem' }}>
      <h2>Checkout</h2>
      <ul>
        {cart.map(item => (
          <li key={item.id}>{item.name} × {item.quantity} - ₹{item.price * item.quantity}</li>
        ))}
      </ul>
      <h3>Total: ₹{total}</h3>
      <button onClick={handlePlaceOrder}>Place Order</button>
    </div>
  );
};

export default Checkout;
