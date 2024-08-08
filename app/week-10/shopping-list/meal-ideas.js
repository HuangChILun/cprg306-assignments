"use client";

import { useState, useEffect } from 'react';

export default function MealIdeas({ ingredient }) {
  const [meals, setMeals] = useState([]);

  const fetchMealIdeas = async (ingredient) => {
    const response = await fetch(`https://www.themealdb.com/api/json/v1/1/filter.php?i=${ingredient}`);
    const data = await response.json();
    return data.meals || [];
  };

  const loadMealIdeas = async () => {
    const mealIdeas = await fetchMealIdeas(ingredient);
    setMeals(mealIdeas);
  };

  useEffect(() => {
    if (ingredient) {
      loadMealIdeas();
    }
  }, [ingredient]);

  return (
    <div className="text-white mr-8">
      <div className="flex justify-center mb-4">
        <h2 className="text-2xl font-bold">Meal Ideas for {ingredient}</h2>
      </div>
      <ul className="grid grid-cols-2 gap-4">
        {meals.map(meal => (
          <li key={meal.idMeal} className="bg-slate-800 p-4 rounded-lg">
            <h3 className="text-xl font-bold mb-2">{meal.strMeal}</h3>
            <img 
              className="w-32 h-32 object-cover" 
              src={meal.strMealThumb} 
              alt={meal.strMeal} 
            />
          </li>
        ))}
      </ul>
    </div>
  );
}
