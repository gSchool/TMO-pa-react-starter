import React, { useState } from "react";
import FormInput from "./FormInput";
import Table from "./Table";

function DisplayFormDataInTable() {
  const [tableData, setTableData] = useState([]);
  const [formInputData, setFormInputData] = useState({
    recipeName: "",
    recipeInstructions: "",
  });

  const handleChange = (event) => {
    const newnInput = (data) => ({
      ...data,
      [event.target.name]: event.target.value,
    });
    setFormInputData(newnInput);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    const checkEmptyInput = !Object.values(formInputData).every(
      (res) => res === ""
    );
    if (checkEmptyInput) {
      const newData = (data) => [...data, formInputData];
      setTableData(newData);
      const emptyInput = { recipeName: "", recipeInstructions: "" };
      setFormInputData(emptyInput);
    }
  };

  return (
    <React.Fragment>
      <div className="container">
        <div className="row">
          <div className="col-sm-8">
            <FormInput
              handleChange={handleChange}
              formInputData={formInputData}
              handleSubmit={handleSubmit}
            />
            <Table tableData={tableData} />
          </div>
          <div className="col-sm-4"></div>
        </div>
      </div>
    </React.Fragment>
  );
}
export default DisplayFormDataInTable;
