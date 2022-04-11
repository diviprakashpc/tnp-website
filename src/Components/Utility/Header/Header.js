import React from 'react'
import './Header.css'
function Header({ heading, alignLeft }) {
  return (
    <h2 className={`header + ${alignLeft && 'alignLeft'}`}>{heading}</h2>
  )
}

export default Header