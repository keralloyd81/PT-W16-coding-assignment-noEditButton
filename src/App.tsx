import { useState } from 'react';
import Header from './components/Header';
import RecipeList from './components/RecipeList';
import { testData } from './testData';

// Define the shape of a Recipe object using TypeScript
export type Recipe = {
  id: number;
  name: string;
  ingredients: string[];
  instructions: string;
  favorite?: boolean;
};

function App() {
  // Set up state to manage the list of recipes
  const [recipes, setRecipes] = useState<Recipe[]>(testData);

  // Add a new recipe (static content for now)
  const handleAdd = () => {
    const newRecipe: Recipe = {
      id: Date.now(), // Unique ID
      name: 'New Recipe',
      ingredients: ['ingredient 1', 'ingredient 2'],
      instructions: 'Do something tasty',
      favorite: false,
    };
    // Update state with new recipe added to the array
    setRecipes([...recipes, newRecipe]);
  };

  // Delete a recipe by ID
  const handleDelete = (id: number) => {
    const updated = recipes.filter((recipe) => recipe.id !== id);
    setRecipes(updated);
  };

  // Toggle the "favorite" property of a recipe
  const handleToggleFavorite = (id: number) => {
    const updated = recipes.map((recipe) =>
      recipe.id === id ? { ...recipe, favorite: !recipe.favorite } : recipe
    );
    setRecipes(updated);
  };

  return (
    <div>
      <Header />

      <div className="container mt-4">
        {/* Button to add a new recipe */}
        <button className="btn btn-primary mb-3" onClick={handleAdd}>
          Add Recipe
        </button>

        {/* Pass data and handlers down to the RecipeList component */}
        <RecipeList
          recipes={recipes}
          onDelete={handleDelete}
          onToggleFavorite={handleToggleFavorite}
        />
      </div>
    </div>
  );
}

export default App;
