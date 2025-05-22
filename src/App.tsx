import React, { useState } from 'react';
import Header from './components/Header';
import RecipeList from './components/RecipeList';
import { recipes as testData } from './data/recipes'; // Static test data

// Define recipe type for clarity
export type Recipe = {
  id: number;
  name: string;
  ingredients: string[];
  instructions: string;
  favorite?: boolean; // NEW: Optional flag for toggling favorite
};

const App: React.FC = () => {
  // Create state variable with initial test data
  const [recipes, setRecipes] = useState<Recipe[]>(testData);

  // ✅ CREATE: Add a new hardcoded recipe
  const addRecipe = () => {
    const newRecipe: Recipe = {
      id: Date.now(), // Unique ID based on timestamp
      name: "Peanut Butter & Jelly",
      ingredients: ["Bread", "Peanut Butter", "Jelly"],
      instructions: "Spread peanut butter and jelly between slices of bread.",
      favorite: false,
    };

    // Use spread syntax to copy old recipes and add the new one
    setRecipes([...recipes, newRecipe]);
  };

  // ✅ DELETE: Remove a recipe by ID
  const deleteRecipe = (id: number) => {
    const updated = recipes.filter((r) => r.id !== id);
    setRecipes(updated);
  };

  // ✅ UPDATE: Toggle favorite property by ID
  const toggleFavorite = (id: number) => {
    const updated = recipes.map((r) =>
      r.id === id ? { ...r, favorite: !r.favorite } : r
    );
    setRecipes(updated);
  };

  return (
    <>
      <Header />
      
      {/* Add Recipe button for testing create feature */}
      <div className="text-center my-3">
        <button className="btn btn-success" onClick={addRecipe}>
          ➕ Add New Recipe
        </button>
      </div>

      {/* Pass down recipes and handlers as props */}
      <RecipeList
        recipes={recipes}
        onDelete={deleteRecipe}
        onToggleFavorite={toggleFavorite}
      />
    </>
  );
};

export default App;
