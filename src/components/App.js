import React, { useState, useEffect } from "react";
import Header from "./Header";
import PizzaForm from "./PizzaForm";
import PizzaList from "./PizzaList";

function App() {
  const [pizzas, setPizzas] = useState([]);
  const [selectedPizza, setSelectedPizza] = useState({
    topping: '',
    size: '',
    vegetarian: false
  })

  useEffect( () => {
    fetch('http://localhost:3001/pizzas')
      .then( res => res.json() )
      .then( pizzaList => setPizzas(pizzaList) )
  }, [])

  const onEditClick = (pizzaToEdit) => {
    setSelectedPizza(pizzaToEdit);
  }

  const updatePizzaDOM = (updatedPizza) => {
    const updatedPizzas = pizzas.map( pizza => {
      if(pizza.id === updatedPizza.id) {
        return updatedPizza;
      } else {
        return pizza;
      }
    })

    setPizzas(updatedPizzas);
  }

  const updatePizzaDB = (updatedPizza) => {
    fetch(`http://localhost:3001/pizzas/${updatedPizza.id}`, {
      method: 'PATCH',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(updatedPizza)
    })
    .then( res => res.json() )
    .then( pizza => console.log(pizza) )
  }

  const onEditSubmit = (updatedPizza) => {
    updatePizzaDOM(updatedPizza);

    updatePizzaDB(updatedPizza);
  }

  return (
    <>
      <Header />
      <PizzaForm selectedPizza={ selectedPizza } onEditSubmit={ onEditSubmit } />
      <PizzaList pizzas={ pizzas } onEditClick={ onEditClick } />
    </>
  );
}

export default App;