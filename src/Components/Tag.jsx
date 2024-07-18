import React from 'react'
import './Tag.css'

export const Tag = ({data}) => {
  return (
    <li className='tag'>
        {data}
        <button className='tag-delete-btn'>X</button>
    </li>

  )
}
