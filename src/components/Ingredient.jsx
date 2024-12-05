import React from 'react'

const Ingredient = ({name, index, parentName='IngredientList', handleFunction }) => {
   return (
    <div style={{
        display: 'flex',
        alignItems: 'center',
    }}>

        {name}

        {
            parentName === 'IngredientList' ?
            (
                <button onClick={() => handleFunction(index)}>+</button>
            ):(
                <button onClick={() => handleFunction(index)}>-</button>
            )
        }

    </div>
  )
}

export default Ingredient