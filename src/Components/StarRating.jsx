import React from 'react'
import './StarRating.css'

export const StarRating = ({rating}) => {
  return (
    <div>
        <ul className='stars'>
         {[...Array(rating)].map(star => {
            return<li className='star'>*</li>
         })
         }
        </ul>
    </div>
  )
}
