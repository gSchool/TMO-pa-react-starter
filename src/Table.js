function Table({ tableData }) {
  return (
    <table className="table">
      <thead>
        <tr>
          <th>recipe #</th>
          <th>recipe-name</th>
          <th>recipe-instructions</th>
        </tr>
      </thead>
      <tbody>
        {tableData.map((data, index) => {
          return (
            <tr key={index}>
              <td>{index + 1}</td>
              <td>{data.recipeName}</td>
              <td>{data.recipeInstructions}</td>
            </tr>
          );
        })}
      </tbody>
    </table>
  );
}

export default Table;
