import React from 'react'
import './styles/Navbar.css'

const Navbar = () => {
  return (
    <nav className="nav--container">
      <img className='nav--logo' src="../assets/travel-icon.png" alt="travel icon" />
      <span className='nav--title'>My travel journal</span>
    </nav>
  )
}

export default Navbar