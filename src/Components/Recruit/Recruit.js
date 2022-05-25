import React, { useEffect } from 'react'
import Container from '../Utility/Container/Container';
import Header from '../Utility/Header/Header';
import './recruit.css';
import Aos from "aos";
import "aos/dist/aos.css";
function Recruit() {
    useEffect(() => {
        Aos.init({ duration: 500 });
    }, [])
    return (
        <div id="recruit" className='recruit'>
            <h1 data-aos="fade-up">Why recruit at IIIT Bhopal?</h1>
            <div data-aos="fade-up" className='recruit-content'>Our Vision is to achive "World Class Excellence in Information and Communication Technology"
                . We've embarked on a mission
                to impart Information Technology education to students and future leaders and
                engage in cutting edge technology research to meet the current needs and future challenges of India and the world at large.


            </div>
            <div data-aos="fade-right" className='recruit-section'>
                <Header heading={"Best of the best make it!"} alignLeft={true} />
                <Container content={"The students are admitted through the esteemed JEE Mains and represents the Top 3 % of the candidates that appear for the exam nationwide, they are handpicked from the garden of knowledge and critical thinking. These students are enriched with both qualitative and quantitative skills, thus they make up for the best in class."} />
            </div>
            <div data-aos="fade-up" className='recruit-section'>
                <Header heading={"Finest curriculum"} alignLeft={false} />
                <Container content={"The Institute offers undergraduate programs in Computer Science & Engineering and Electronics & Communications Engineering. IIIT Bhopal is well connected with peer institutes and industries to enhance research and development, and enrich its educational programs. The Institute has laid out a balanced curriculum with a strong emphasis on practical skills along with theory; and encourages innovations and co-curricular activities. IIIT Bhopal provides an environment that nurtures leaders in addition to industry-ready engineers."} />
            </div>
            <div data-aos="fade-right" className='recruit-section'>
                <Header heading={"All Around Development"} alignLeft={true} />
                <Container content={"The Institute is committed to providing the students opportunities to develop an all-rounded personality. Many essential soft skills, including communication, conflict resolution, creative problem solving, strategic thinking, team building, are inculcated in the students through various classroom and co-curricular activities. Also, there are open-ended learning components in the curriculum that enable the students to explore their creative sides and develop innovative solutions and projects."} />
            </div>
        </div>
    )
}

export default Recruit