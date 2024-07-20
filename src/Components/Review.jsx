import React from 'react'

export const Review = ( { review_data }) => {
    const { title, author, rating, review } = review_data.review_data
  return (
    <div>
        <p>{rating}</p>
        <h3>{title}</h3>
        <p>{author}</p>
        <p>{review}</p>
    </div>
  )
}
