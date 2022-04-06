import React, { useEffect, useState } from 'react';
/* for hamburger icon for menu */ 
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars } from '@fortawesome/free-solid-svg-icons';
import './Navbar.css';

const Navbar = () => {
    const [change,setChange] = useState(false);
    const button = document.getElementsByClassName("navbar-toggler");
    console.log(button.classList);
    const toggleClass = () => {
        const container = document.querySelector(".container-fluid");
        if(button){
            container.style.backgroundColor = 'rgba(0,0,0,0.3)';
        }else{
            container.style.backgroundColor = 'rgba(0,0,0.8)';
        }
    } 

    const handleScroll = () => {
    if(window.scrollY > 650){
            setChange(true);
        }else{
            setChange(false);
        }
    }
    useEffect(() => {
      window.addEventListener('scroll',handleScroll);
    //   button.addEventListener('click',toggleClass);    
      return () => {
        window.removeEventListener('scroll',handleScroll);
      }
    }, [])
    
    return (
        <nav className={`custom-navbar navbar fixed-top navbar-expand-lg navbar-dark`}>
            <div className={`container-fluid ${change && 'change-color'}`}>
                <a className="navbar-brand ms-2" href="#">
                    <img src="images/collegeLogo.svg" className='navbar-logo' alt="IIIT Bhopal Logo" ></img>
                </a>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation" onClick={toggleClass}>
                    <FontAwesomeIcon icon={faBars} style={{ color: "#fff"}}/>
                </button>
                <div className="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul className="navbar-nav ms-auto me-5 mb-2 mb-lg-0">
                        <li className="nav-item me-2">
                            <a  id='home-link' className="nav-link" aria-current="page" href="#home">Home</a>
                        </li>
                        <li className="nav-item me-2">
                            <a id='about-link' className="nav-link" href="#about">About Us</a>
                        </li>
                        <li className="nav-item me-2">
                            <a id='recruit-link' className="nav-link" href="#recruit">Why recruit us?</a>
                        </li>
                        <li className="nav-item me-2">
                            <a id='stats-link' className="nav-link" href="#stats">Placements</a>
                        </li>
                        <li className="nav-item me-2">
                            <a id='contact-link' className="nav-link" href="#contact">Contact Us</a>
                        </li>
                    </ul>
                </div>
            </div>
        </nav>

    )
}

export default Navbar