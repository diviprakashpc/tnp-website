import React from 'react';
import './HomeButton.css';
function HomeButton({ link, children }) {
  return (
    <div className='button-container'>
        <a href={`${link}`} target='_blank' className='button-link'>{children}</a>
    </div>
  )
}

export default HomeButton