"use client";

import { useState } from "react";
import ItemList from './item-list';
import NewItem from './new-item';
import MealIdeas from './meal-ideas';
import itemsData from './items.json';

export default function Page() {
  const [items, setItems] = useState(itemsData);
  const [selectedItemName, setSelectedItemName] = useState("");
  const handleAddItem = (newItem) => {
    setItems([...items, newItem]);
  };

  const handleItemSelect = (itemName) => 
  {
    const cleanName = itemName
    .replace(/[\uD83C-\uDBFF\uDC00-\uDFFF]+/g, "")
    .replace(/[^\x20-\x7E]/g, "")
    .split(",")[0]
    .trim();
    setSelectedItemName(cleanName);
  }

  return (
      <main className="flex">
      <div className="w-1/2">
        <h2 className="text-3xl font-bold m-2 text-white">Shopping List</h2>
        <NewItem onAddItem={handleAddItem} />
        <ItemList items={items} onItemSelect={handleItemSelect} />
      </div>
      <div className="w-1/2">
        <MealIdeas ingredient={selectedItemName} />
      </div>
    </main>
  );
}
