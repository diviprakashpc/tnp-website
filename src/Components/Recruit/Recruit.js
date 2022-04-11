import React from 'react'
import Container from '../Utility/Container/Container';
import Header from '../Utility/Header/Header';
import './recruit.css';
function Recruit() {
    let heading, content;
    return (
        <div id="recruit" className='recruit'>
            <h1>Why recruit at IIIT Bhopal?</h1>
            <p>Our Vision is to achive "World Class Excellence in Information and Communication Technology"
                . We've embarked on a mission
                to impart Information Technology education to students and future leaders and
                engage in cutting edge technology research to meet the current needs and future challenges of India and the world at large.


            </p>
            
            <Header heading={"Academic System"} alignLeft={true}/>
            <Container content={"Being mentored by IITH, IIITR has adopted the innovative fractal academics system, which warrants continuous evaluation. This ensures the students have a deeper understanding of the core subjects."} />
            <Header heading={"Academic System"} alignLeft={false}/>
            <Container content={"Being mentored by IITH, IIITR has adopted the innovative fractal academics system, which warrants continuous evaluation. This ensures the students have a deeper understanding of the core subjects."} />
            <Header heading={"Academic System"} alignLeft={true}/>
            <Container content={"Being mentored by IITH, IIITR has adopted the innovative fractal academics system, which warrants continuous evaluation. This ensures the students have a deeper understanding of the core subjects."} />
        
        </div>
    )
}

export default Recruit