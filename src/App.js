import './App.css';
import React from 'react';
import formJSON from './FormElement.json';
import { useState, useEffect} from 'react';
import Input from './components/Input';
import RecipesList from './components/RecipesList';
import AddButton from './components/AddButton';


function App() {
  const [addClicked, setAddClicked] = useState(0);


  // const getData = () => {
  //   fetch('formElement.json')
  //  }
  // const isAdded = AddButton.state.clicked;

  

  return (
    <>
    <div>
      <h1 className="doNotRemoveMe">Hello world.</h1>
      {/* ^ Do not remove this element ^ */}
      <h1 className="myRecipesHeader">My Recipes</h1>

      <div>
        <p>There are no recipes to list.</p>
          {/* if (addClicked === 0 ){
          
        } */}
          {/* <p>You clicked {addClicked} times</p> */}
          {/* <button onClick={() =>setAddClicked(addClicked+1)}>Add Recipe</button> */}

      </div>

      <RecipesList />

     

      
      {/* <Input /> */}


      


  
    </div>

    </>
  );
}

export default App;
