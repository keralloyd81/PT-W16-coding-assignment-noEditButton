import type { Recipe } from '../App';

type Props = {
  recipe: Recipe;
  onDelete: (id: number) => void;
  onToggleFavorite: (id: number) => void;
};

// This component displays the information for a single recipe
function RecipeCard({ recipe, onDelete, onToggleFavorite }: Props) {
  return (
    <div className="card shadow-sm">
      <div className="card-body">
        <h5 className="card-title">
          {recipe.name}{' '}
          {recipe.favorite && <span className="text-warning">(Favorite)</span>}
        </h5>

        <h6>Ingredients:</h6>
        <ul>
          {recipe.ingredients.map((ingredient, index) => (
            <li key={index}>{ingredient}</li>
          ))}
        </ul>

        <p>
          <strong>Instructions:</strong> {recipe.instructions}
        </p>

        {/* Buttons to toggle favorite and delete recipe */}
        <button
          className="btn btn-outline-warning me-2"
          onClick={() => onToggleFavorite(recipe.id)}
        >
          {recipe.favorite ? 'Unfavorite' : 'Favorite'}
        </button>
        <button
          className="btn btn-outline-danger"
          onClick={() => onDelete(recipe.id)}
        >
          Delete
        </button>
      </div>
    </div>
  );
}

export default RecipeCard;
