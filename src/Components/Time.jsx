import React from 'react'

export const Time = ({ timeData }) => {
  const { total, additional, prep, cook } = timeData
  return (
    <div className='section'> 
        <p>Total Time: {total}</p>
        <p>Additional Time: {additional}</p>
        <p>Prep Time {prep}</p>
        <p>cook Time {cook}</p>
    </div>
  )
}
