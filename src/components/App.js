import React, { useState, useEffect } from "react";
import Header from "./Header";
import PizzaForm from "./PizzaForm";
import PizzaList from "./PizzaList";

function App() {
  const [pizzas, setPizzas] = useState([])
  const [selected, setSelected] = useState({
    topping: '',
    size: '',
    vegetarian: false
  })

  const updatePizzas = updatedPizza => {
    setPizzas( () => pizzas.map( pizza => {
      if( updatedPizza.id === pizza.id) {
        return updatedPizza;
      } else {
        return pizza;
      }
    }))
  }

  useEffect( () => {
    fetch(`http://localhost:3001/pizzas`)
      .then( res => res.json() )
      .then( setPizzas )
  }, [])

  const listProps = { pizzas, setSelected }

  return (
    <>
      <Header />
      <PizzaForm selected={ selected } updatePizzas={ updatePizzas } />
      <PizzaList { ...listProps } />
    </>
  );
}

export default App;
