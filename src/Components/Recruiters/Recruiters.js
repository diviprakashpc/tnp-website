import React,{ useEffect } from 'react'
import './Recruiter.css'
import Aos from "aos";
import "aos/dist/aos.css";
function Recruiters() {
  useEffect(() => {
    Aos.init({ duration: 500 });
}, [])
  return (
    <div className='recruiters-container'>
      <h2 className='recruiters-heading'>Our Recruiters</h2>
      <div className='recruiters'>
        <div className='recruiters-1'>
          <span data-aos='flip-left'><img src="CompaniesLogo/amazon.svg" style={{ width: '8rem', height: '8rem' }} alt=''></img></span>
          <span data-aos='flip-left'><img src="CompaniesLogo/BrowserStack.svg" style={{ width: '10rem', height: '4rem' }} alt=''></img></span>
          <span data-aos='flip-left'><img src="CompaniesLogo/Cars24.svg" style={{ width: '7rem', height: '4rem' }} alt=''></img></span>
          <span data-aos='flip-left'><img src="CompaniesLogo/cognizant.svg" style={{ width: '10rem', height: '10rem' }} alt=''></img></span>
          <span data-aos='flip-left'><img src="CompaniesLogo/cogoport.svg" style={{ width: '10rem', height: '10rem' }} alt=''></img></span>
          <span data-aos='flip-left'><img src="CompaniesLogo/Microsoft_logo.svg.png" style={{ width: '3rem', height: '3rem' }} alt=''></img></span>
          {/* <span><img src="CompaniesLogo/" style={{width: '10rem', height: '10rem'}}></img></span> */}
          <span data-aos='flip-left'><img src="CompaniesLogo/Adobe_Corporate_logo.svg.png" style={{ width: '8rem', height: '2rem' }} alt=''></img></span>
          <span data-aos='flip-left'><img src="CompaniesLogo/Bharti_Airtel_Logo.svg.png" style={{ width: '5rem', height: '3rem' }} alt=''></img></span>
          <span data-aos='flip-left'><img src="CompaniesLogo/Optum_logo_2021.svg.png" style={{ width: '6rem', height: '2rem' }} alt=''></img></span>
          <span data-aos='flip-left'><img src="CompaniesLogo/Commvault_logo_2019.svg.png" style={{ width: '5rem', height: '1.5rem' }} alt=''></img></span>
          <span data-aos='flip-left'><img src="CompaniesLogo/Synopsys_Logo.svg.png" style={{ width: '10rem', height: '1.5rem' }} alt=''></img></span>
          <span data-aos='flip-left'><img src="CompaniesLogo/Analog_Devices_Logo.svg.png" style={{ width: '7rem', height: '3rem' }} alt=''></img></span>
          <span data-aos='flip-left'><img src="CompaniesLogo/freecharge_logo.svg" style={{ width: '9rem', height: '10rem' }} alt=''></img></span>
          <span data-aos='flip-left'><img src="CompaniesLogo/MAQ_Software_logo.png" style={{ width: '5rem', height: '5rem' }} alt=''></img></span>

        </div>
        <div className='recruiters-2'>
          <span data-aos='flip-right'><img src="CompaniesLogo/gep-logo-47D00BEC42-seeklogo.com.png" style={{ width: '7rem', height: '2rem' }} alt=''></img></span>
          <span data-aos='flip-left'><img src="CompaniesLogo/tekion.svg" style={{ width: '9rem', height: '4rem' }} alt=''></img></span>
          <span data-aos='flip-right'><img src="CompaniesLogo/nvidia.svg" style={{ width: '10rem', height: '10rem' }} alt=''></img></span>
          <span data-aos='flip-left'><img src="CompaniesLogo/jio.svg" style={{ width: '6rem', height: '5rem' }} alt=''></img></span>
          <span data-aos='flip-right'><img src="CompaniesLogo/mobikwik.svg" style={{ width: '8rem', height: '3rem' }} alt=''></img></span>
          <span data-aos='flip-left'><img src="CompaniesLogo/indiamart.svg" style={{ width: '10rem', height: '8rem' }} alt=''></img></span>
          <span data-aos='flip-right'><img src="CompaniesLogo/nextuple.svg" style={{ width: '10rem', height: '10rem' }} alt=''></img></span>
          <span data-aos='flip-left'><img src="CompaniesLogo/logicfruit.svg" style={{ width: '10rem', height: '10rem' }} alt=''></img></span>
          <span data-aos='flip-right'><img src="CompaniesLogo/greayOrange.svg" style={{ width: '10rem', height: '10rem' }} alt=''></img></span>
        </div>
      </div>
    </div>
  )
}

export default Recruiters
