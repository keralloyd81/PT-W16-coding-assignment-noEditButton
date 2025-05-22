import React from 'react';
import RecipeCard from './RecipeCard';
import type { Recipe } from '../App';

// Define props passed to RecipeList
type Props = {
  recipes: Recipe[];
  onDelete: (id: number) => void;
  onToggleFavorite: (id: number) => void;
};

const RecipeList: React.FC<Props> = ({ recipes, onDelete, onToggleFavorite }) => {
  return (
    <div className="container my-5">
      <h2 className="mb-4">Recipes</h2>
      {/* Map over each recipe and pass handlers to RecipeCard */}
      {recipes.map((recipe) => (
        <RecipeCard
          key={recipe.id}
          recipe={recipe}
          onDelete={onDelete}
          onToggleFavorite={onToggleFavorite}
        />
      ))}
    </div>
  );
};

export default RecipeList;
