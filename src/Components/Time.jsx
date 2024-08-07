import React from 'react'

export const Time = ({ timeData }) => {
  const { total, additional, prep, cook } = timeData
  return (
    <div className='section'> 
        <p>Total Time: {total} min</p>
        <p>Additional Time: {additional} min</p>
        <p>Prep Time: {prep} min</p>
        <p>cook Time: {cook} min</p>
    </div>
  )
}
