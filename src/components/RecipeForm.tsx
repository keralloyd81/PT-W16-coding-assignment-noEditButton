import React, { useState } from 'react';
import type { FormEvent } from 'react';import type { Recipe } from '../App';

type RecipeFormProps = {
  addRecipe: (newRecipe: Recipe) => void;
};

const RecipeForm: React.FC<RecipeFormProps> = ({ addRecipe }) => {
  // Set local state for form inputs
  const [name, setName] = useState('');
  const [ingredients, setIngredients] = useState('');
  const [instructions, setInstructions] = useState('');

  // Handle form submission
  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();

    // Build new recipe object
    const newRecipe: Recipe = {
      id: Date.now(), // Temporary unique ID
      name,
      ingredients: ingredients.split(',').map((ing) => ing.trim()),
      instructions,
      favorite: false,
    };

    // Send the new recipe up to App component
    addRecipe(newRecipe);

    // Reset form
    setName('');
    setIngredients('');
    setInstructions('');
  };

  return (
    <div className="container my-4">
      <h2>Add a New Recipe</h2>
      <form onSubmit={handleSubmit}>
        <div className="mb-3">
          <label htmlFor="name" className="form-label">Recipe Name</label>
          <input
            type="text"
            className="form-control"
            id="name"
            value={name}
            onChange={(e) => setName(e.target.value)}
            required
          />
        </div>

        <div className="mb-3">
          <label htmlFor="ingredients" className="form-label">Ingredients (comma separated)</label>
          <input
            type="text"
            className="form-control"
            id="ingredients"
            value={ingredients}
            onChange={(e) => setIngredients(e.target.value)}
            required
          />
        </div>

        <div className="mb-3">
          <label htmlFor="instructions" className="form-label">Instructions</label>
          <textarea
            className="form-control"
            id="instructions"
            rows={3}
            value={instructions}
            onChange={(e) => setInstructions(e.target.value)}
            required
          ></textarea>
        </div>

        <button type="submit" className="btn btn-primary">Add Recipe</button>
      </form>
    </div>
  );
};

export default RecipeForm;
