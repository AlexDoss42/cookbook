import React from 'react'
import './NutritionalFacts.css'

export const NutritionalFacts = ( {servings, nutritionalFacts} ) => {

  return (
    <div className='section'>
    <h3>Nutritional Facts</h3>
    <p>Servings: {servings}</p>
    <ul id="nutritionalFactsList">
      <li>Calories: {nutritionalFacts.calories}</li>
      <li>Protein: {nutritionalFacts.protein}</li>
      <li>Carbs: {nutritionalFacts.carbs}</li>
      <li>Fat: {nutritionalFacts.fat}</li>
    </ul></div>
  )
}
