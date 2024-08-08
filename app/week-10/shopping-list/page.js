"use client";

import { useState, useEffect } from "react";
import ItemList from './item-list';
import NewItem from './new-item';
import MealIdeas from './meal-ideas';
import { getItems, addItem } from '../_services/shopping-list-service';
import { useUserAuth } from "../auth-context";


export default function Page() {
  const { user } = useUserAuth();
  const [items, setItems] = useState([]);
  const [selectedItemName, setSelectedItemName] = useState("");

  useEffect(() => {
      if (user) {
          const loadItems = async () => {
              const fetchedItems = await getItems(user.uid);
              setItems(fetchedItems);
          };

          loadItems();
      }
  }, [user]);

  const handleAddItem = async (newItem) => {
      const itemId = await addItem(user.uid, newItem);
      setItems([...items, { ...newItem, id: itemId }]);
  };

  const handleItemSelect = (itemName) => {
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

