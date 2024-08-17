import React from 'react'

export const LeaveAReview = () => {
  return (
    <div className='section'>
    <h3>Leave a review</h3>
    <label>Title: </label>
    <input type='text' name='title' />
    {/* place holder for 5 star rating component */}
    <p>*****</p> 
    <textarea />
    <button>Submit</button>
    </div>
  )
}
