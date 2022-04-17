import React,{ useEffect } from 'react'
import './About.css';
import Aos from "aos";
import "aos/dist/aos.css";
const About = () => {
    useEffect(() => {
        Aos.init({ duration: 500 });
    }, [])
    return (
        <div id='about' className='about' data-aos='fade-up'>
            <div className='aboutUs'>
                <h2 data-aos='fade-up'><span>About Us</span></h2>
                <p data-aos='fade-up'><a data-aos='fade-up' href='https://iiitbhopal.ac.in/#!/' target='_blank'>Indian Institute of Information Technology Bhopal</a> , is an institute of national importance established by Government of India, To address the challenges faced by the Indian IT industry and growth of the domestic IT market, under the objective of establishing twenty IIIT's on a Not-for-profit Public Private Partnership (N-PPP) basis.
                <p data-aos='fade-up'></p> In a short span IIIT Bhopal has established itself as one of the most sought after destinations for aspiring technologists all over India. We attract the finest students for our programmes and we invariably aspire to meet the increasing demands of the industry by nurturing some of the best engineers and developers the country has to offer.
                </p>
            </div>
            <div className='director-desk' data-aos='fade-right'>
                <h2><span>From Director's desk</span></h2>
                <div className='director-content'>
                    <div className='director-image'>
                        <img src='images/directorImage.png' alt="Director's image" ></img>
                    </div>
                    <div className='director-message' data-aos='fade-right'>
                        <p className='quote'>
                            Indian Institute of Information Technology, Bhopal, is an Institute of National Importance, established in the year 2017 by Ministry of Education (MoE), Government of India on not-for-profit Public Private Partnership basis. Academic activates of IIIT Bhopal were started in July 2017 in the campus of MANIT Bhopal. The Director of MANIT and his upbeat faculty members ably took-up the responsibility of mentoring this Institute, that enhanced the academic performance of the Institute.
                            Prof. N. S. Raghuwanshi, resumed the charge of Director IIIT Bhopal since the institute establishment and is currently on deputation from IIT Kharagpur, where he is a professor in the department of Agricultural and Food Engineering. He has over 25 years’ experience in research and teaching various aspects of Water Management, Information Technology Applications in Agriculture and climate change. He has developed several techniques, and research tools and web-based course material. He has made significant contribution in the area of irrigation system performance, evapotranspiration estimation techniques, hydrological modeling of agricultural watershed and development of educational and design software.
                            Seven developed softwares are copyrighted and have received wide acceptance among different user agencies such as ICAR Institute, State Agriculture Universities and NGOs. He has published more than 110 papers in peer-reviewed journals. He has completed several research and consultancy projects funded by various national (ICAR, MOWR, DST, SAC, MHRD, ITRA, CMC, DFID) and international (EU, DST DAAD, Volkswagen Foundation) agencies. He has guided 12 PhDs and Currently, 6 PhD Scholars are working with him. He is the recipient of rotary International Fellowship, 1990-93; Fulbright-Nehru senior Research Fellowship, 2009-10, and Dr. P.S. Khankhoje memorial gold medal, 2011. He is currently serving in various national committees. He is a Fellow of Indian National Academy of Engineering (INAE, 2016) and also Fellow of National Academy of Agriculture Science (NAAS, 2016).
                        </p>
                        <p className='director-name'>- N S Raghuvansi</p>
                    </div>
                </div>
            </div>
            <div className='tpo-desk' data-aos='fade-up'>
                <h2><span>TPO's message</span></h2>
                <div className='tpo-content'>
                    <div className='tpo-image'>
                        <img src='images/tpoImage.jpeg' alt="TPO's image" ></img>
                    </div>
                    <div className='tpo-message' data-aos='fade-right'>
                        <p className='quote'>
                        It is a great honour for our institute to extend to your company the most cordial invitation for campus recruitment. It gives me immense pleasure to mention that our newly established institute with its esteemed industrial partners have launched the second batch of students as the aspiring professionals of tomorrow. This institute of national importance is recognised for its excellence in the technical arena. The excellent academic schema, in accordance with that of MANIT Bhopal, and the extra- curricular activities hone skills for the real world and the real challenges. The institute is very sincere for its hospitality and we strive to facilitate our recruiters with all necessities. In case we have adversity slipped somewhere, I offer my apologies in advance. I would solicit your company to kindly visit our beautiful campus and pick the candidate of your choice on any date convenient to both of us. Looking forward to building a win-win relationship.
                        </p>
                        <p className='tpo-name'>- Ajay Srivastav</p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default About