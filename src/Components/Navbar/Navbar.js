import React from 'react'
import './Navbar.css';

const Navbar = () => {
    return (
        <nav className="custom-navbar navbar fixed-top navbar-expand-lg navbar-dark">
            <div className="container-fluid">
                <a className="navbar-brand ms-5" href="#">
                    <img src="images/collegeLogo.svg" className='iin' width="50" height="40" alt="IIIT Bhopal Logo" ></img>
                </a>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul className="navbar-nav ms-auto me-5 mb-2 mb-lg-0">
                        <li className="nav-item me-2">
                            <a className="nav-link active" aria-current="page" href="#">Home</a>
                        </li>
                        <li className="nav-item me-2">
                            <a className="nav-link" href="#">About Us</a>
                        </li>
                        <li className="nav-item me-2">
                            <a className="nav-link" href="#">Why recruit us?</a>
                        </li>
                        <li className="nav-item me-2">
                            <a className="nav-link" href="#">Placements</a>
                        </li>
                        <li className="nav-item me-2">
                            <a className="nav-link" href="#">Contact Us</a>
                        </li>
                    </ul>
                </div>
            </div>
        </nav>

    )
}

export default Navbar