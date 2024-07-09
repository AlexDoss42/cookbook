import React from 'react'

export const Time = ({ timeData }) => {
  return (
    <div className='section'> 
        <p>Total Time: {timeData.total}</p>
        <p>Additional Time: {timeData.additional}</p>
        <p>Prep Time {timeData.prep}</p>
        <p>cook Time {timeData.cook}</p>
    </div>
  )
}
