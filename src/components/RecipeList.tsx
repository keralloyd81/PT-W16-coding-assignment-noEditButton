import RecipeCard from './RecipeCard';
import type { Recipe } from '../App';

type Props = {
  recipes: Recipe[];
  onDelete: (id: number) => void;
  onToggleFavorite: (id: number) => void;
};

// This component takes the recipe list and renders a RecipeCard for each one
function RecipeList({ recipes, onDelete, onToggleFavorite }: Props) {
  return (
    <div className="row">
      {recipes.map((recipe) => (
        <div className="col-md-6 mb-4" key={recipe.id}>
          <RecipeCard
            recipe={recipe}
            onDelete={onDelete}
            onToggleFavorite={onToggleFavorite}
          />
        </div>
      ))}
    </div>
  );
}

export default RecipeList;
