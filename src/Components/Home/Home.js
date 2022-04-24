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
                        <img src="images/college1.jpg" className="d-block w-100" alt="..." />
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
            <div class="down-button-container">
                <div class="bg"></div>
                <div class="button"><Link to="/#about" className='button-link'><FontAwesomeIcon icon={faChevronDown} /></Link></div>
            </div>

            {/* --Social Media Buttons-- */}
            <div class='social-links'>
                <div class='social-btn flex-center' id="gmail">
                    <i class="fa-solid fa-envelope"></i>
                    <span><a href='mailto:tpwiiitb@gmail.com' target='_blank'>@tpwiiitb</a></span>
                </div>
                <div class='social-btn flex-center' id="facebook">
                    <i class="fa-brands fa-facebook-f"></i>
                    <span><a href='https://www.facebook.com/iiitbhopalofficial' target='_blank'>@iiitbhopal</a></span>
                </div>
                <div class='social-btn flex-center' id="twitter">
                    <i class="fa-brands fa-twitter"></i>
                    <span><a href='https://twitter.com/iiitbhopal' target='_blank'>@tpwiiitb</a></span>
                </div>
                <div class='social-btn flex-center' id="linkedin">
                    <i class="fa-brands fa-linkedin-in"></i>
                    <span><a href='https://www.linkedin.com/in/tnp-iiitbhopal/' target='_blank'>@tpwiiitb</a></span>
                </div>
            </div>
        </div>
    )
}

export default Home