import React from 'react'

const Ingredient = ({name, index, parentName='IngredientList', handleFunction }) => {
   return (
    <div style={{
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-between',
        width: '100%',
    }}>

        <div>
        {name}
        </div>

       <div>
       {
            parentName === 'IngredientList' ?
            (
                <button onClick={() => handleFunction(index)}>+</button>
            ):(
                <button onClick={() => handleFunction(index)}>-</button>
            )
        }
       </div>

    </div>
  )
}

export default Ingredient