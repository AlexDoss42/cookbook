import React from 'react'
import { StarRating } from './StarRating'

export const Review = ( { review_data }) => {
    const { title, author, rating, review } = review_data.review_data
  return (
    <div>
        <StarRating rating={rating} />
        <h3>{title}</h3>
        <p>{author}</p>
        <p>{review}</p>
    </div>
  )
}
