"use client"
import { useState } from 'react';
export default function Item({ name, quantity, category, onSelect }) {

  const [isSelected, setIsSelected] = useState(false);
  const handleClick = () => {
    onSelect();
    setIsSelected(!isSelected);
  };
    return (
      <section 
      onClick={handleClick} 
      className={`p-4 m-4 max-w-sm cursor-pointer ${isSelected ? 'bg-blue-600' : 'bg-slate-800'}`}
    >
        <h2  className="text-xl font-bold text-white ">{name}</h2>
        <p className="text-sm text-white">buy {quantity} in {category}</p>
      </section>
      
    );
  }
  