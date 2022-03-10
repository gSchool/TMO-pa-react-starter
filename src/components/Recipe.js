import React, { useState } from 'react';
import Input from './Input';

const Recipe = ({ recipes, completeTodo }) => {
  const [edit, setEdit] = useState({
    id: null,
    valueName: '',
    valueInstruction: '',
    
  });

  const submitUpdate = value => {
    setEdit({
      id: null,
      valueName: '',
      valueInstruction: ''    });
  };

  if (edit.id) {
    return <Input edit={edit} onSubmit={submitUpdate} />;
  }
  if (recipes.length === 0){
    return <p>There are no recipes to list</p>
  } else{  return recipes.map((recipe, index) => (
      
    <div
      className={recipe.isComplete ? 'todo-row complete' : 'todo-row'}
      key={index}
    >
      <li key={recipe.id} onClick={() => completeTodo(recipe.id)}>

        {recipe.textName}

      </li>
 
    </div>
  ));}

};

export default Recipe;