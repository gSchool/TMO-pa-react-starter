function FormInput({ handleChange, formInputData, handleSubmit }) {
  return (
    <div className="form-row row">
      <div className="col">
        <input
          type="text"
          onChange={handleChange}
          value={formInputData.recipeName}
          name="recipeName"
          className="form-control"
          placeholder="recipe-name"
        />
      </div>
      <div className="col">
        <input
          type="text"
          onChange={handleChange}
          value={formInputData.recipeInstructions}
          name="recipeInstructions"
          className="form-control"
          placeholder="recipe-instructions"
        />
      </div>
      <div className="col">
        <button type="submit" onClick={handleSubmit}>
          Add
        </button>
      </div>
    </div>
  );
}
export default FormInput;
