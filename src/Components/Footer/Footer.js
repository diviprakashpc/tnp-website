import React from 'react'
import './Footer.css'
function Contact() {
    return (
        <div className='footer-container' >
            {/* <h2>Contact US</h2> */}
            <div className='footerDetail'>
                <img src="images/collegeLogo.svg"></img>
            </div>
            <div className='footerDetail'>
                <p className='footerHeading'>Address</p>
                <div>Room No TC-105, New Teaching Block</div>
                <div>C/O Maulana Azad National Institute of Technology (MANIT), Bhopal</div>
                <div>Bhopal, Madhya Pradesh, India</div>
                <div>Pin Code : 462003</div>
                <iframe className="addressMap" src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3666.6974808219898!2d77.40644251489435!3d23.217692984854573!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x397c4377bd0627f5%3A0xf968cf9fe4da497a!2sIndian%20Institute%20of%20Information%20Technology%20(IIIT)%20Bhopal%20(An%20Autonomous%20Institute%20of%20National%20Importance%20under%20Act%20of%20Parliament)!5e0!3m2!1sen!2sin!4v1649819091249!5m2!1sen!2sin" width="350" height="200" style={{border:0}} allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
            </div>
            <div className='footerDetail'>
                <p className='footerHeading'>Contact Us</p>
            </div>
            <div className='footerDetail'>
                <p className='footerHeading'>Quick Links</p>
            </div>
        </div>
    )
}

export default Contact