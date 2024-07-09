import React from 'react'

export const Instructions = ({ Instructions }) => {
  return (
    <div className='section'>
      <h3>Cooking Instructions</h3>
      <ol>
        {Instructions.map((instruction) => {
              return<li>{instruction}</li>
            })}
      </ol>
    </div>
  )
}
