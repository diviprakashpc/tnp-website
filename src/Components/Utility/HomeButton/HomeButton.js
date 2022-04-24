import React from 'react';
import './HomeButton.css';
import { HashLink as Link } from 'react-router-hash-link';
function HomeButton({ link, children }) {
  return (
    <div className='button-container'>
        <Link to={`${link}`} className='button-link'>{children}</Link>
    </div>
  )
}

export default HomeButton