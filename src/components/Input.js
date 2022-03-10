import { render } from '@testing-library/react';
import React, { useState, useEffect, useRef } from 'react';
import RecipesList from './RecipesList';


function Input(props){
  const [inputName, setName] = useState(props.edit ? props.edit.value : '');
  const [inputInstructions, setInstructions] = useState(props.edit ? props.edit.value : '');

  const inputNameRef = useRef(inputName);
  
  const inputInstructionsRef = useRef(inputName);

  // useEffect(() => {
  //   inputNameRef.current.value = inputName;
  //   // inputInstructionsRef.current.focus();
  // });

  const handleNameChange = e => {
    setName(e.target.value);
    console.log("handleNameChange" ,inputName);
  };

  const handleInstructionsChange = e => {
    setInstructions(e.target.value);
  };

  const handleSubmit = e => {
    e.preventDefault();
    props.onSubmit({
      id: Math.floor(Math.random() * 10000),
      textName: inputName,
      textInstructions: inputInstructions
    });
    console.log("hereNae2" ,inputName, e);
    console.log("HELLLO", inputNameRef.current.value);
    setName([...inputName]);

    setName('');
    setInstructions('');
 
  };
  

        return(
            <>
            <div>
            <form onSubmit={handleSubmit} className="addForm">
              <fieldset>
                <label htmlFor="recipe-name">
                  <p>recipe-name</p>
                  <input 
                    ref={inputNameRef}
                    type="text" 
                    value={inputName} 
                    onChange={handleNameChange}
                    
                    />
                </label>
                <label htmlFor="recipe-instructions">
                  <p>recipe-instructions</p>
                  <input 
                    type="text" 
                    value={inputInstructions} 
                    onChange={handleInstructionsChange}
                    />
                </label>
              </fieldset>
              <button onClick={handleSubmit}>Submit</button>
            </form>
            </div>
            
            </>
        );
    // }
}

export default Input;