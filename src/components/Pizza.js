import React from "react";

function Pizza({ pizza, onEditClick }) {
  const { topping, size, vegetarian } = pizza;

  return (
    <tr>
      <td>{ topping }</td>
      <td>{ size }</td>
      <td>{ vegetarian ? 'Yes' : 'No' }</td>
      <td>
        <button onClick={ () => onEditClick(pizza) } type="button" className="btn btn-primary">
          Edit Pizza
        </button>
      </td>
    </tr>
  );
}

export default Pizza;