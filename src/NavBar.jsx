import React from 'react'
import { Link } from 'react-router-dom'

export const NavBar = () => {
  return (
    <div> 
        <nav>           
            <ul>
                <li><Link className='link' to="/">Home</Link></li>
                <li><Link className='link' to="/recipes">Recipes</Link></li>
                <li><Link className='link' to="/tree">Equipment</Link></li>
                <li><Link className='link' to="/search">About</Link></li>
            </ul>
        </nav>
    </div>
  )
}
