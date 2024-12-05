import Ingredient from "./Ingredient";

// `src/components/BurgerStack.jsx`
const BurgerStack = ({stack, handleRemoveToStack}) => {

    return <ul>
        {
            stack.length === 0 ?
            (
                <p>No Ingredients!</p>
            ):(
                stack.map( (addedIngridient, index) => (
                    <li
                     key={index}
                     style={{ backgroundColor: addedIngridient.color }}
                    >
                        <Ingredient
                         name={addedIngridient.name}
                         parentName="BurgerStack"
                         index={index}
                         handleFunction={handleRemoveToStack}
                        />
                    </li>
                ))
            )
        }
    </ul>;
  };
  
  export default BurgerStack;
  