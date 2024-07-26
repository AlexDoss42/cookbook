import React from 'react'
import reviewsData from './../review_data.json'
import { Review } from './Review'
import './ReviewList.css'

export const ReviewList = () => {

  return (
    <div className='section'>
      <h2>Read the reviews</h2>
      <ul className='review-list'>
          {reviewsData.reviews.map((review_data) => {
            return<Review review_data={{review_data}} />
          })}
        </ul>
    </div>
  )
}
