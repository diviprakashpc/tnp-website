import React from 'react'
import './Home.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronDown, faF } from '@fortawesome/free-solid-svg-icons';
import { HashLink as Link } from 'react-router-hash-link';
function Home() {
    return (
        <div id='home'>
            <div className='home-cover'></div>
            <div id="carouselExampleControls" className="carousel slide" data-bs-ride="carousel">
                <div className="carousel-inner">
                    <div className="carousel-item active">
                        <img src="images/college1.jpg" className="d-block w-100" alt="College Image" />
                    </div>
                    {/* <div className="carousel-item">
                    <img src="..." className="d-block w-100" alt="..." />
                </div>
                <div className="carousel-item">
                    <img src="..." className="d-block w-100" alt="..." />
                </div> */}
                </div>
                <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleControls" data-bs-slide="prev">
                    <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                    <span className="visually-hidden">Previous</span>
                </button>
                <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleControls" data-bs-slide="next">
                    <span className="carousel-control-next-icon" aria-hidden="true"></span>
                    <span className="visually-hidden">Next</span>
                </button>
            </div>
            <div className='home-content-container'>
                <div className='home-content'>
                    <h4>विद्यया . अमृतम . श्नुते</h4>
                    <h1>Training and Placement Cell</h1>
                    <h2>IIIT BHOPAL</h2>
                    {/* <div className='buttons'>
                    <HomeButton link={`https://drive.google.com/file/d/136FL1gnE5N9zKVumUCUXNIls29Gldo7t/view?usp=sharing`}>Brochure</HomeButton>
                    <HomeButton link={`https://drive.google.com/file/d/136FL1gnE5N9zKVumUCUXNIls29Gldo7t/view?usp=sharing`}>Brochure</HomeButton>

                </div> */}
                </div>
            </div>

            {/* -- Down button -- */}
            <div className="down-button-container">
                <Link to="/#about">
                    <div className="bg"></div>
                    <div className="button button-link"><FontAwesomeIcon icon={faChevronDown} /></div>
                </Link>
            </div>

            {/* --Social Media Buttons-- */}
            <div className='social-links'>
                <div className='social-btn flex-center' id="gmail">
                    <i className="fa-solid fa-envelope"></i>
                    <span><a href='mailto:tpwiiitb@gmail.com' target='_blank'>@tpwiiitb</a></span>
                </div>
                <div className='social-btn flex-center' id="facebook">
                    <i className="fa-brands fa-facebook-f"></i>
                    <span><a href='https://www.facebook.com/iiitbhopalofficial' target='_blank'>@iiitbhopal</a></span>
                </div>
                <div className='social-btn flex-center' id="twitter">
                    <i className="fa-brands fa-twitter"></i>
                    <span><a href='https://twitter.com/iiitbhopal' target='_blank'>@tpwiiitb</a></span>
                </div>
                <div className='social-btn flex-center' id="linkedin">
                    <i className="fa-brands fa-linkedin-in"></i>
                    <span><a href='https://www.linkedin.com/in/tnp-iiitbhopal/' target='_blank'>@tpwiiitb</a></span>
                </div>
            </div>
        </div>
    )
}

export default Home