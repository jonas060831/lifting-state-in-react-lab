import Ingredient from "./Ingredient";

// src/components/IngredientList.jsx
const IngredientList = ({availableIngredients, handleAddToStack}) => {

    
    return <ul>
        {
            availableIngredients.map( (ingridient, index) => (
                <li
                 key={index} 
                 style={{ backgroundColor: ingridient.color }}
                >
                    <Ingredient
                     name={ingridient.name}
                     index={index}
                     handleFunction={handleAddToStack}
                     
                    />
                </li>
            ))
        }
    </ul>;
  };
  
  export default IngredientList;
  