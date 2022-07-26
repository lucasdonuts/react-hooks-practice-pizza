import React, { useState, useEffect } from "react";

function PizzaForm({ selectedPizza, onEditSubmit }) {
  const [formData, setFormData] = useState(selectedPizza);

  useEffect( () => {
    setFormData( selectedPizza )
  }, [ selectedPizza ] )

  const handleChange = (e) => {
    if( e.target.name === 'vegetarian') {
      setFormData({
        ...formData,
        vegetarian: e.target.value === 'Vegetarian' ? true : false
      })
    } else {
      setFormData({
        ...formData,
        [e.target.name]: e.target.value
      })
    }
  }

  const handleSubmit = (e) => {
    e.preventDefault();

    onEditSubmit( formData );
  }

  return (
    <form onSubmit={ handleSubmit }>
      <div className="form-row">
        <div className="col-5">
          <input
            className="form-control"
            type="text"
            name="topping"
            value={ formData.topping }
            onChange={ handleChange }
            placeholder="Pizza Topping"
          />
        </div>
        <div className="col">
          <select value={ formData.size } onChange={ handleChange } className="form-control" name="size">
            <option value="Small">Small</option>
            <option value="Medium">Medium</option>
            <option value="Large">Large</option>
          </select>
        </div>
        <div className="col">
          <div className="form-check">
            <input
              checked={ formData.vegetarian }
              onChange={ handleChange }
              className="form-check-input"
              type="radio"
              name="vegetarian"
              value="Vegetarian"
            />
            <label className="form-check-label">Vegetarian</label>
          </div>
          <div className="form-check">
            <input
              checked={ !formData.vegetarian }
              onChange={ handleChange }
              className="form-check-input"
              type="radio"
              name="vegetarian"
              value="Not Vegetarian"
            />
            <label className="form-check-label">Not Vegetarian</label>
          </div>
        </div>
        <div className="col">
          <button type="submit" className="btn btn-success">
            Submit
          </button>
        </div>
      </div>
    </form>
  );
}

export default PizzaForm;