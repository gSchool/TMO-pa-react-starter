import React, { useState } from 'react';
import Input from './Input';
import Recipe from './Recipe';

function RecipesList() {
  const [recipes, setRecipes] = useState([]);
  const [clicked, setClicked] = useState(false);

  const onClick = () => setClicked(clicked => !clicked)

  const submitRecipe = recipe => {

    console.log(recipe.textName);

    // if (!recipe.text || /^\s*$/.test(recipe.text)) {
    //   return;
    // }
    console.log("string",recipes);

    // const newRecipes = [0,1,2,3];
    const newRecipes = [recipe, ...recipes];


    setRecipes(newRecipes);
    console.log("newRecipe",recipes);
    console.log("trying",...recipes);

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
    {/* <Input onSubmit={submitRecipe}/> */}
        {/* {clicked ? (<Input onSubmit={submitRecipe}/>): (<button onClick={onClick}> Add Recipe </button> )} */}
        
        <Recipe
            recipes={recipes}
            completerecipe={completerecipe}
        />
        {clicked ? (<Input onSubmit={submitRecipe}/>): (<button onClick={onClick}> Add Recipe </button> )}


    </div>

    </>
  );
}

export default RecipesList;