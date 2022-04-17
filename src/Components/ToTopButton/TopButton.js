import React, { useState, useEffect } from 'react';
import './TopButton.css';
import Aos from "aos";
import "aos/dist/aos.css";
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
    <a className={`top-button ${!visible && 'makeVisible'}`} href='#home' data-aos='fade-up'>
        {/* <span></span>
        <span></span>
        <span></span>
        <span></span> */}
        <i class="fa-solid fa-angles-up"></i>
    </a>
  )
}

export default TopButton