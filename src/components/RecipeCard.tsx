import React from 'react';
import type { Recipe } from '../App';
// Props expected from parent
type Props = {
  recipe: Recipe;
  onDelete: (id: number) => void;
  onToggleFavorite: (id: number) => void;
};

const RecipeCard: React.FC<Props> = ({ recipe, onDelete, onToggleFavorite }) => {
  return (
    <div className="card mb-3 shadow-sm">
      <div className="card-body">
        <h3 className="card-title d-flex justify-content-between align-items-center">
          {recipe.name}
          {/* Heart icon to indicate favorite */}
          <span
            style={{ cursor: 'pointer', color: recipe.favorite ? 'red' : 'gray' }}
            onClick={() => onToggleFavorite(recipe.id)}
            title="Toggle Favorite"
          >
            
          </span>
        </h3>

        <h5>Ingredients:</h5>
        <ul>
          {recipe.ingredients.map((item, index) => (
            <li key={index}>{item}</li>
          ))}
        </ul>

        <h5>Instructions:</h5>
        <p>{recipe.instructions}</p>

        {/* Delete button */}
        <button className="btn btn-danger" onClick={() => onDelete(recipe.id)}>
           Delete Recipe
        </button>
      </div>
    </div>
  );
};

export default RecipeCard;
