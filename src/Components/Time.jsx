import React from 'react'

export const Time = (time) => {
  console.log(123, time);
  return (
    <div className='section'> 
        <p>Total Time: {time.time.total}</p>
        <p>Additional Time: {time.time.additional}</p>
        <p>Prep Time {time.time.prep}</p>
        <p>cook Time {time.time.cook}</p>
        <p>Servings</p>
    </div>
  )
}
