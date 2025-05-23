import { useState } from 'react';
import Header from './components/Header';
import RecipeList from './components/RecipeList';
import RecipeForm from './components/RecipeForm';
import { testData } from './data/testData';

// Define a Recipe type (shared across components)
export type Recipe = {
  id: number;
  name: string;
  ingredients: string[];
  instructions: string;
  favorite?: boolean;
};

function App() {
  // Main state for recipe data
  const [recipes, setRecipes] = useState<Recipe[]>(testData);

  // Add new recipe to the list
  const addRecipe = (newRecipe: Recipe) => {
    setRecipes([...recipes, newRecipe]);
  };

  // Delete a recipe
  const deleteRecipe = (id: number) => {
    setRecipes(recipes.filter((recipe) => recipe.id !== id));
  };

  // Toggle favorite status
  const toggleFavorite = (id: number) => {
    const updated = recipes.map((recipe) =>
      recipe.id === id ? { ...recipe, favorite: !recipe.favorite } : recipe
    );
    setRecipes(updated);
  };

  return (
    <>
      <Header />
      <RecipeForm addRecipe={addRecipe} />
      <RecipeList
        recipes={recipes}
        onDelete={deleteRecipe}
        onToggleFavorite={toggleFavorite}
      />
    </>
  );
}

export default App;
