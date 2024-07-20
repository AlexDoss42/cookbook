import React from 'react'
import reviewData from './../review_data.json'
import { Review } from './Review'

export const ReviewList = () => {

  return (
    <div className='section'>
      <h2>Read the reviews</h2>
      <ul className='ingredients-list'>
          {reviewData.map((review_data) => {
            return<Review review_data={{review_data}} />
          })}
        </ul>
    </div>
  )
}
