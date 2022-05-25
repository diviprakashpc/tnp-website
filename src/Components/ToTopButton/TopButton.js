import React, { useState, useEffect } from 'react';
import './TopButton.css';
import Aos from "aos";
import "aos/dist/aos.css";
import { HashLink as Link } from 'react-router-hash-link';
function TopButton() {

    useEffect(() => {
        Aos.init({ duration: 1000 });
    }, [])

    const [visible, setVisible] = useState(true);
    const checkVisibility = () => {
        if(window.scrollY > 350){
            setVisible(false);
        }else{
            setVisible(true);
        }
    }
    useEffect(() => {
      window.addEventListener('scroll', checkVisibility);
    
      return () => {
      window.removeEventListener('scroll', checkVisibility);
        
      }
    }, [])
    
  return (
    <Link className={`top-button ${!visible && 'makeVisible'}`} to='/#home' data-aos='fade-up'>
        {/* <span></span>
        <span></span>
        <span></span>
        <span></span> */}
        <i className="fa-solid fa-angles-up"></i>
    </Link>
  )
}

export default TopButton