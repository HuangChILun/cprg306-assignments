"use client";

import { useState } from "react";

export default function NewItem() {
  const [name, setName] = useState("");
  const [quantity, setQuantity] = useState(1);
  const [category, setCategory] = useState("produce");

  const handleSubmit = (event) => {
    event.preventDefault();
    const item = { name, quantity, category };
    console.log(item);
    alert(`Name: ${name}\nQuantity: ${quantity}\nCategory: ${category}`);
    setName("");
    setQuantity(1);
    setCategory("produce");
  };

  return (
    <form onSubmit={handleSubmit} className="flex items-center justify-center min-h-screen">
      <div className="w-full max-w-xs">
        <label className="block text-sm font-medium text-gray-700">Name: </label>
        <input type="text" value={name} onChange={(e) => setName(e.target.value)} required />
      </div>

      <div className="w-full max-w-xs">
        <label className="block text-sm font-medium text-gray-700">Quantity: </label>
        <input type="number" min="1" max="99" value={quantity} onChange={(e) => setQuantity(Number(e.target.value))}
        required 
        />
      </div>

      <div className="w-full max-w-xs">
        <label className="block text-sm font-medium text-gray-700">Category: </label>
        <select value={category} onChange={(e) => setCategory(e.target.value)} required
        >
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
