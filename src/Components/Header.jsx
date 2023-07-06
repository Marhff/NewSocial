import React from 'react'
import { Link } from 'react-router-dom'
import './Header.scss' 

const Header = () => {
  return (
    <div className='style.Header'>
      <nav>
        <Link to="/">Home</Link>
        <Link to="/login">Login / Criar</Link>
      </nav>
    </div>
  )
}

export default Header