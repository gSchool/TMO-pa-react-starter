import React, { useState } from 'react';
import Input from './Input';
import Recipe from './Recipe';

function RecipesList() {
  const [recipes, setRecipes] = useState([]);
  const [clicked, setClicked] = useState(false);

  const onClick = () => setClicked(clicked => !clicked)

  const submitRecipe = recipe => {
    recipe.preventDefault();
    // console.log(...recipes);

    // if (!recipe.text || /^\s*$/.test(recipe.text)) {
    //   return;
    // }
    console.log("string",recipes);

    const newRecipes = [recipe, recipes];

    setRecipes(newRecipes);
    console.log("newRecipe",recipes);
  };


  const completerecipe = id => {
    let updatedrecipes = recipes.map(recipe => {
    //   if (recipe.id === id) {
    //     recipe.isComplete = !recipe.isComplete;
    //   }
      return recipe;
    });
    setRecipes(updatedrecipes);
  };

  return (
    <>
    <div>
 
        {clicked ? (<Input onSubmit={submitRecipe("a")}/>): (<button onClick={onClick}> Add Recipe </button> )}
        <Recipe
            recipes={recipes}
            completerecipe={completerecipe}
        />
    </div>

    </>
  );
}

export default RecipesList;