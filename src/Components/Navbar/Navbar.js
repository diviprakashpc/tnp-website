import React from 'react'
import './Navbar.css';

const Navbar = () => {
    return (
        <nav className="custom-navbar navbar fixed-top navbar-expand-lg navbar-dark">
            <div className="container-fluid">
                <a className="navbar-brand ms-2" href="#">
                    <img src="images/collegeLogo.svg" className='iin' width="60" height="60" alt="IIIT Bhopal Logo" ></img>
                </a>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul className="navbar-nav ms-auto me-5 mb-2 mb-lg-0">
                        <li className="nav-item me-2">
                            <a className="nav-link active" aria-current="page" href="#home">Home</a>
                        </li>
                        <li className="nav-item me-2">
                            <a className="nav-link" href="#about">About Us</a>
                        </li>
                        <li className="nav-item me-2">
                            <a className="nav-link" href="#recruit">Why recruit us?</a>
                        </li>
                        <li className="nav-item me-2">
                            <a className="nav-link" href="#stats">Placements</a>
                        </li>
                        <li className="nav-item me-2">
                            <a className="nav-link" href="#contact">Contact Us</a>
                        </li>
                    </ul>
                </div>
            </div>
        </nav>

    )
}

export default Navbar