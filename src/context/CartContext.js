
import React, { createContext, useContext, useState } from 'react';

const CartContext = createContext();
export const useCart = () => useContext(CartContext);

export const CartProvider = ({ children }) => {
  const [cart, setCart] = useState([]);

  const addToCart = (item) => {
    const found = cart.find(i => i.id === item.id);
    if (found) {
      setCart(cart.map(i => i.id === item.id ? { ...i, quantity: i.quantity + 1 } : i));
    } else {
      setCart([...cart, { ...item, quantity: 1 }]);
    }
  };

  const removeFromCart = (id) => {
    setCart(cart.filter(i => i.id !== id));
  };

  const decreaseQty = (id) => {
    const found = cart.find(i => i.id === id);
    if (found.quantity === 1) {
      removeFromCart(id);
    } else {
      setCart(cart.map(i => i.id === id ? { ...i, quantity: i.quantity - 1 } : i));
    }
  };

  const clearCart = () => setCart([]);

  return (
    <CartContext.Provider value={{ cart, addToCart, removeFromCart, decreaseQty, clearCart }}>
      {children}
    </CartContext.Provider>
  );
};
