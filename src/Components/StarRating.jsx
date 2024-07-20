import React from 'react'

export const StarRating = ({rating}) => {
  return (
    <div>
        <ul className='ingredients-list'>
         {[...Array(rating)].map(star => {
            return<li>*</li>
         })
         }
        </ul>
    </div>
  )
}
