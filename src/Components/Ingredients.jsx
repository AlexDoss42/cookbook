import React from 'react'

export const Ingredients = ({ Ingredients }) => {
  console.log(Ingredients)
  return (
    <div className='section'> 
        <h3>Ingredients List</h3>
        
        <ul>
          {Ingredients.map((ingredient) => {
            return<li>{ingredient}</li>
          })}
        </ul>
    </div>
  )
}
