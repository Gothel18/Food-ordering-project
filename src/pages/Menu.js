
import React, { useState } from 'react';
import foodItems from '../data';
import { useCart } from '../context/CartContext';

const Menu = () => {
  const { addToCart } = useCart();
  const [search, setSearch] = useState('');
  const [filter, setFilter] = useState('All');

  const categories = ['All', ...new Set(foodItems.map(item => item.category))];

  const filtered = foodItems.filter(item => {
    const matchSearch = item.name.toLowerCase().includes(search.toLowerCase());
    const matchCategory = filter === 'All' || item.category === filter;
    return matchSearch && matchCategory;
  });

  return (
    <div style={{ padding: '2rem' }}>
      <h2>Menu</h2>
      <input
        type="text"
        placeholder="Search..."
        value={search}
        onChange={e => setSearch(e.target.value)}
        style={{ marginRight: '1rem' }}
      />
      <select onChange={e => setFilter(e.target.value)} value={filter}>
        {categories.map(cat => (
          <option key={cat}>{cat}</option>
        ))}
      </select>

      <div style={{ display: 'flex', flexWrap: 'wrap', gap: '1rem', marginTop: '1rem' }}>
        {filtered.map(item => (
          <div key={item.id} style={{ border: '1px solid #ccc', padding: '1rem', width: '200px' }}>
            <h3>{item.name}</h3>
            <p>₹{item.price}</p>
            <p>{item.category}</p>
            <button
              disabled={!item.available}
              onClick={() => addToCart(item)}
              style={{
                backgroundColor: item.available ? '#28a745' : '#aaa',
                color: '#fff',
                border: 'none',
                padding: '0.5rem 1rem',
                cursor: item.available ? 'pointer' : 'not-allowed'
              }}
            >
              {item.available ? 'Add to Cart' : 'Sold Out'}
            </button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Menu;
