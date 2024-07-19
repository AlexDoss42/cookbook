import React from 'react'
import './Tag.css'

export const Tag = ({data}) => {
  return (
    <li className='tag'>
        {data}
        <button className='tag-delete-btn' onClick={console.log("you'll eventually delete this tag")}>X</button>
    </li>

  )
}
