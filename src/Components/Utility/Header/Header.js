import React from 'react'
import './Header.css'
function Header({ heading, alignLeft }) {
  return (
    <div className={`header-container ${alignLeft && 'alignLeft'}`}><h2 className='header'><span>{heading}</span></h2></div>
  )
}

export default Header