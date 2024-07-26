import React from 'react'
import { StarRating } from './StarRating'
import './Review.css'

export const Review = ( { review_data }) => {
    const { title, author, rating, review } = review_data.review_data
  return (
    <div className='review-container'>
        <h3>{title}</h3>
        <p>{author}</p>
        <div className='rating-date-container'>
        <StarRating rating={rating} />
        <span className='date'>date</span>
        </div>
        <p>{review}</p>
    </div>
  )
}
