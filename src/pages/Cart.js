
import React from 'react';
import { useCart } from '../context/CartContext';
import { useNavigate } from 'react-router-dom';

const Cart = () => {
  const { cart, addToCart, decreaseQty, removeFromCart } = useCart();
  const navigate = useNavigate();

  const total = cart.reduce((sum, item) => sum + item.price * item.quantity, 0);

  return (
    <div style={{ padding: '2rem' }}>
      <h2>Your Cart</h2>
      {cart.length === 0 ? (
        <p>Your cart is empty.</p>
      ) : (
        <>
          <ul>
            {cart.map((item) => (
              <li key={item.id}>
                {item.name} - ₹{item.price} × {item.quantity}
                <button onClick={() => decreaseQty(item.id)} style={{ marginLeft: '1rem' }}>−</button>
                <button onClick={() => addToCart(item)} style={{ marginLeft: '0.5rem' }}>＋</button>
                <button onClick={() => removeFromCart(item.id)} style={{ marginLeft: '0.5rem' }}>Remove</button>
              </li>
            ))}
          </ul>
          <h3>Total: ₹{total}</h3>
          <button onClick={() => navigate('/checkout')} style={{ marginTop: '1rem' }}>
            Proceed to Checkout
          </button>
        </>
      )}
    </div>
  );
};

export default Cart;
