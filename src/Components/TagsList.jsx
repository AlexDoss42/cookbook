import React from 'react'
import { Tag } from './Tag.jsx'

export const TagsList = ({tagData}) => { 
    const { tags } = tagData
  return (
    <div className='section'>
        <h2>Tags</h2>
        <ul>
            {tags.map((tag) => {
                return <Tag data={tag} />
            })}
        </ul>
    </div>
  )
}
