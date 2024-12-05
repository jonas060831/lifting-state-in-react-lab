// src/App.jsx

import { useState } from 'react';
import './App.css';
import BurgerStack from './components/BurgerStack';
import IngredientList from './components/IngredientList';

export const availableIngredients = [
  { name: 'Kaiser Bun', color: 'saddlebrown' },
  { name: 'Sesame Bun', color: 'sandybrown' },
  { name: 'Gluten Free Bun', color: 'peru' },
  { name: 'Lettuce Wrap', color: 'olivedrab' },
  { name: 'Beef Patty', color: '#3F250B' },
  { name: 'Soy Patty', color: '#3F250B' },
  { name: 'Black Bean Patty', color: '#3F250B' },
  { name: 'Chicken Patty', color: 'burlywood' },
  { name: 'Lettuce', color: 'lawngreen' },
  { name: 'Tomato', color: 'tomato' },
  { name: 'Bacon', color: 'maroon' },
  { name: 'Onion', color: 'lightyellow' },
  { name: 'Cheddar Cheese', color: '#FDE18B' },
  { name: 'Swiss Cheese', color: '#F1E1A8' },
];

const App = () => {

  //The parent component containing <BurgerStack> and <IngredientList>.
  //It will also contain stack state, and two functions
  //for manipulating that state.

  //im assuming its an array
  const [stack, setStack] = useState([])


  //below shoud be two function assuming 1
  //is to add to the stack and the other one is deleting on the stack

  const addToBurger = (ingredientId) => {
    
    //find the ing info base on the id
    const ing = availableIngredients.find((_, index) => index === ingredientId)

    //then we want to add it to the stack without removing the previous value
    setStack(prevIng => {

      return [...prevIng, ing]
    })
  }

  const removeFromBurger = (ingredientId) => {

    const newIngs = stack.filter((_,ingIndex) => {
      return ingIndex !== ingredientId
    })

    console.log(newIngs)

    setStack(newIngs)
  }

  return (
    <main>
      <h1>Burger Stacker</h1>
      <section>
        {/* List & Stack components */}

        <IngredientList
         availableIngredients={availableIngredients}
         handleAddToStack={addToBurger}
        />

        <BurgerStack
         stack={stack}
         handleRemoveToStack={removeFromBurger}
        />
      </section>
    </main>
  );
};

export default App;
