import React, { useState, useEffect } from "react";

function PizzaForm({ selected, updatePizzas }) {
  const [form, setForm] = useState( selected )

  useEffect( () => {
    setForm( selected )
  }, [ selected ])

  const userInput = e => setForm( form => ({...form, [e.target.name]: e.target.value}))

  const toggleRadio = (e) =>{
    if( e.target.value === 'Vegetarian' ) {
      setForm( form => ({ ...form, vegetarian: true }))
    } else {
      setForm ( form => ({ ...form, vegetarian: false }))
    }
  }

  const handleSubmit = (e) => {
    e.preventDefault();
    updatePizzas(form);
  }

  return (
    <form onSubmit={ handleSubmit }>
      <div className="form-row">
        <div className="col-5">
          <input
            onChange={ userInput }
            className="form-control"
            type="text"
            name="topping"
            value={ form.topping }
            placeholder="Pizza Topping"
          />
        </div>
        <div className="col">
          <select onChange={ userInput } className="form-control" name="size" value={ form.size }>
            <option value="Small">Small</option>
            <option value="Medium">Medium</option>
            <option value="Large">Large</option>
          </select>
        </div>
        <div className="col">
          <div className="form-check">
            <input
              checked={ form.vegetarian ? true : false }
              onChange={ toggleRadio }
              className="form-check-input"
              type="radio"
              name="vegetarian"
              value="Vegetarian"
            />
            <label className="form-check-label">Vegetarian</label>
          </div>
          <div className="form-check">
            <input
              checked={ form.vegetarian ? false : true }
              onChange={ toggleRadio }
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
