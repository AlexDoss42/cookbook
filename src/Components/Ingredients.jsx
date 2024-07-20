import React from 'react'
import './Ingredients.css'

export const Ingredients = ({ Ingredients }) => {
  return (
    <div className='section'> 
        <h2>Ingredients List</h2>
        <ul className='ingredients-list'>
          {Ingredients.map((ingredient) => {
            return<li>{ingredient}</li>
          })}
        </ul>
    </div>
  )
}
