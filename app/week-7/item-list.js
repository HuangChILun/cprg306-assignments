"use client";

import React, { useState } from 'react';
import Item from './item';

export default function ItemList({ items, onItemSelect }) {
  const [sortBy, setSortBy] = useState('name');

  const sortedItems = [...items].sort((a, b) => {
    if (sortBy === 'name') {
      return a.name.localeCompare(b.name);
    } else if (sortBy === 'category') {
      return a.category.localeCompare(b.category);
    }
    return 0;
  });

  const handleSortName = () => {
    setSortBy('name');
  };

  const handleSortCategory = () => {
    setSortBy('category');
  };

  return (
    <div>
      <div>
        <p>Sort By:</p>
        <button 
          onClick={handleSortName} 
          style={{ backgroundColor: sortBy === 'name' ? 'lightblue' : 'white', marginLeft: '17px' }}
        >
          Name
        </button>
        <button 
          onClick={handleSortCategory} 
          style={{ backgroundColor: sortBy === 'category' ? 'lightblue' : 'white', marginLeft: '15px' }}
        >
          Category
        </button>
      </div>
      <ul>
        {sortedItems.map(item => (
          <Item 
          key={item.id} 
          name={item.name} 
          quantity={item.quantity} 
          category={item.category} 
          onSelect={() => 
            onItemSelect(item.name)}/>
        ))}
      </ul>
    </div>
  );
}
