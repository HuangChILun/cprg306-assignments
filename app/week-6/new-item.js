"use client";

import { useState } from "react";

export default function NewItem({ onAddItem }) {
  const [name, setName] = useState("");
  const [quantity, setQuantity] = useState(1);
  const [category, setCategory] = useState("produce");

  const generateId = () => {
    return '_' + Math.random().toString(36).substr(2, 9);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    const item = { id: generateId(), name, quantity, category };
    onAddItem(item);
    setName("");
    setQuantity(1);
    setCategory("produce");
  };

  return (
    <form onSubmit={handleSubmit} className="flex flex-col items-center justify-center h-64 w-64 ml-4">
      <div className="w-full max-w-sm mb-4">
        <label className="block text-sm font-medium text-gray-700 mb-1">Name: </label>
        <input type="text" value={name} onChange={(e) => setName(e.target.value)} required className="w-full px-2 py-1 border border-gray-300 rounded" />
      </div>

      <div className="w-full max-w-sm mb-4">
        <label className="block text-sm font-medium text-gray-700 mb-1">Quantity: </label>
        <input type="number" min="1" max="99" value={quantity} onChange={(e) => setQuantity(Number(e.target.value))} required className="w-full px-2 py-1 border border-gray-300 rounded" />
      </div>

      <div className="w-full max-w-sm mb-4">
        <label className="block text-sm font-medium text-gray-700 mb-1">Category: </label>
        <select value={category} onChange={(e) => setCategory(e.target.value)} required className="w-full px-2 py-1 border border-gray-300 rounded">
          <option value="produce">Produce</option>
          <option value="dairy">Dairy</option>
          <option value="bakery">Bakery</option>
          <option value="meat">Meat</option>
          <option value="frozen-foods">Frozen Foods</option>
          <option value="canned-goods">Canned Goods</option>
          <option value="dry-goods">Dry Goods</option>
          <option value="beverages">Beverages</option>
          <option value="snacks">Snacks</option>
          <option value="household">Household</option>
          <option value="other">Other</option>
        </select>
      </div>

      <div>
        <button type="submit" className="px-4 py-2 text-white bg-blue-500 rounded">Submit</button>
      </div>
    </form>
  );
}
