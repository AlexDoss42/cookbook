import React from 'react'
import './Instructions.css'

export const Instructions = ({ Instructions }) => {
  return (
    <div className='section'>
      <h3>Cooking Instructions</h3>
      <ol className='instructions-list'>
        {Instructions.map((instruction) => {
              return<li>{instruction}</li>
            })}
      </ol>
    </div>
  )
}
