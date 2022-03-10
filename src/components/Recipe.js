import React, { useState } from 'react';
import Input from './Input';

const Recipe = ({ recipes, completeTodo }) => {
  const [edit, setEdit] = useState({
    id: null,
    valueName: '',
    valueInstruction: ''
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

  return recipes.map((recipe, index) => (
    <div
      className={recipe.isComplete ? 'todo-row complete' : 'todo-row'}
      key={index}
    >
      <div key={recipe.id} onClick={() => completeTodo(recipe.id)}>
        {recipe.text}
      </div>
 
    </div>
  ));
};

export default Recipe;