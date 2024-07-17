import React from 'react'
import './Tag.css'

export const Tag = ({data}) => {
  return (
    <div className='tag'>
    <li>{data}</li>
    <button>X</button>
    </div>
  )
}
