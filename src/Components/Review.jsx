import React from 'react'
import { StarRating } from './StarRating'
import './Review.css'

export const Review = ( { review_data }) => {
    const { title, author, rating, review } = review_data.review_data
  return (
    <div className='review-container'>
        <StarRating rating={rating} />
        <h3>{title}</h3>
        <p>{author}</p>
        <p>{review}</p>
        <p>date</p>
    </div>
  )
}
