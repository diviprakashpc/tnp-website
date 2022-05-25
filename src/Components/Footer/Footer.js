import React, { useEffect } from 'react';
import './Footer.css';
import Aos from "aos";
import "aos/dist/aos.css";
function Footer() {
    useEffect(() => {
        Aos.init({ duration: 500 });
    }, [])
    

    return (
        <footer className='footer-container' data-aos='fade-up'>
            {/* <h2>Contact US</h2> */}
            <div className='footerDetail footerLogo'>
                <img src="images/collegeLogo.svg"></img>
            </div>
            <div className='footerDetail'>
                <p className='footerHeading'>Address</p>
                <div>Room No TC-105, New Teaching Block</div>
                <div>C/O Maulana Azad National Institute of Technology (MANIT), Bhopal</div>
                <div>Bhopal, Madhya Pradesh, India</div>
                <div>Pin Code : 462003</div>
                <iframe className="addressMap" src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3666.6974808219898!2d77.40644251489435!3d23.217692984854573!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x397c4377bd0627f5%3A0xf968cf9fe4da497a!2sIndian%20Institute%20of%20Information%20Technology%20(IIIT)%20Bhopal%20(An%20Autonomous%20Institute%20of%20National%20Importance%20under%20Act%20of%20Parliament)!5e0!3m2!1sen!2sin!4v1649819091249!5m2!1sen!2sin" width="300" height="150" style={{border:0}} allowFullScreen="" loading="lazy" referrerPolicy="no-referrer-when-downgrade"></iframe>
            </div>
            <div className='footerDetail'>
                <p className='footerHeading'>Contact Us</p>
                <ul>
                    <li className='contact-item' >
                        <div className='contact-item-name'>Prof. Ajay Srivastava(TPO)</div>
                        <ul>
                            <li className='contact-item-detail'>
                        <a href='mailto:Tpo@iiitbhopal.ac.in' className='contact-item-link'><i className="contact-icon fa-solid fa-envelope"></i>Tpo@iiitbhopal.ac.in</a>

                            </li>
                            <li className='contact-item-detail'>
                        <a href='tel:7554051953' className='contact-item-link' title='TPO contact'><i className="contact-icon fa-solid fa-phone"></i> 75540 51953</a>

                            </li>
                        </ul>
                    </li>
                    <li className='contact-item'>
                        <div className='contact-item-name'>Ayush Choudhary(Student Coordinator)</div>
                        <ul>
                            <li className='contact-item-detail'>
                        <a href='mailto:tpwiiitb@gmail.com' className='contact-item-link'><i className="contact-icon fa-solid fa-envelope"></i>tpwiiitb@gmail.com</a>

                            </li>
                            <li className='contact-item-detail'>
                        <a href='tel:70007 28910' className='contact-item-link'><i className="contact-icon fa-solid fa-phone"></i> 70007 28910</a>

                            </li>
                        </ul>
                    </li>
                    <li className='contact-item'>
                        <div className='contact-item-name'>IIIT BHOPAL Office</div>
                        <ul>
                            <li className='contact-item-detail'>
                        <a href='mailto:info@iiitbhopal.ac.in' className='contact-item-link'><i className="contact-icon fa-solid fa-envelope"></i>info@iiitbhopal.ac.in</a>

                            </li>
                            <li className='contact-item-detail'>
                        <a href='tel:7554051950' className='contact-item-link'><i className="contact-icon fa-solid fa-phone"></i>75540 51950</a>

                            </li>
                        </ul>
                    </li>
                </ul>
            </div>
            <div className='footerDetail quickLinks'>
                <p className='footerHeading quickLink-heading'>Quick Links</p>
                <div>
                <div className='quickLink-container'><a href='https://drive.google.com/file/d/136FL1gnE5N9zKVumUCUXNIls29Gldo7t/view?usp=sharing' target='_blank' className='quickLink'><i className="quickLink-icon fa-solid fa-square-arrow-up-right"></i>Brochure</a></div>
                <div className='quickLink-container'>
                <a href='https://drive.google.com/file/d/1jd5XaQOyNNYJyp2-UpTStHZ1bh8z4OHH/view?usp=sharing' target='_blank' className='quickLink'><i className="quickLink-icon fa-solid fa-square-arrow-up-right"></i>Job Notification Form</a>
                </div>
                <div className='quickLink-container'>
                <a href='https://forms.gle/R8o6mBNeaRd3L8jGA' target='_blank' className='quickLink'><i className="quickLink-icon fa-solid fa-square-arrow-up-right"></i>Reach out to us</a>

                </div>
                </div>
            </div>
        </footer>
    )
}

export default Footer