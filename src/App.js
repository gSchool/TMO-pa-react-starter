import "./App.css";
import DisplayFormDataInTable from "./DisplayFormDataInTable";
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import React, { useState } from "react";

function App() {
  const [open, setItOpen] = useState(false);

  const openForm = () => {
    setItOpen(true);
  };

  return (
    <div className="home">
      <h1 className="doNotRemoveMe">Hello world.</h1>
      {/* ^ Do not remove this element ^ */}
      <h1>My Recipes</h1>
      {open ? (
        <DisplayFormDataInTable />
      ) : (
        <div>
          There are no recipes to list <br></br>
          <button onClick={openForm}>Add Recipes</button>
        </div>
      )}
    </div>
  );
}

export default App;
