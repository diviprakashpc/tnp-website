import React from 'react'
import './ContactUs.css'
import { HashLink as Link } from 'react-router-hash-link';
function ContactUs() {
  return (
    <div className='contactUs'>
      <div className='contactHeader'>
        <Link to='/'><i class="fa-solid fa-xmark"></i></Link>
      </div>
      <div className='note'>* For more details hover over images</div>
      <div className='team'>
        <h3 className='tpoHeading'>Training & Placements Officer</h3>
        <div className='TNP-head makeFlex'>

          <div className='contact-container'>
            <div className='contact-cards'>
              <div className='imgBox'>
                <img src='images/tpoImage.jpeg'></img>
              </div>
              <div className='contact-content'>
                <div className='contact-details'>
                  <h2>Prof. Ajay shrivastava</h2>
                  <ul className='contact-icons'>
                    <li><a href='tel:7554051950'><i class="fa-solid fa-phone"></i></a></li>
                    <li><a href='mailto:tpo@iiitbhopal.ac.in'><i class="fa-solid fa-envelope"></i></a></li>
                    <li><a href='https://www.linkedin.com/in/prof-ajay-shrivastava-27043154' target='_blank'><i class="fa-brands fa-linkedin"></i></a></li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* -- Faculty members -- */}
        <h3>Faculty Incharge</h3>
        <div className='faculty-members makeFlex'>

          <div className='contact-container'>
            <div className='contact-cards'>
              <div className='imgBox'>
                  <img src='images/default-profile.png'></img>
              </div>
              <div className='contact-content'>
                <div className='contact-details'>
                  <h2>Dr. Sonal Chandel</h2>
                  <ul className='contact-icons'>
                    <li><a href='tel:7554051950'><i class="fa-solid fa-phone"></i></a></li>
                    <li><a href='mailto:tpo@iiitbhopal.ac.in'><i class="fa-solid fa-envelope"></i></a></li>
                    <li><a href='https://www.linkedin.com/in/prof-ajay-shrivastava-27043154' target='_blank'><i class="fa-brands fa-linkedin"></i></a></li>
                  </ul>
                </div>
              </div>
            </div>
          </div>


          <div className='contact-container'>
            <div className='contact-cards'>
              <div className='imgBox'>
                <img src='images/default-profile.png'></img>
              </div>
              <div className='contact-content'>
                <div className='contact-details'>
                  <h2>Dr. Praveen Pawar</h2>
                  <ul className='contact-icons'>
                    <li><a href='tel:7554051950'><i class="fa-solid fa-phone"></i></a></li>
                    <li><a href='mailto:tpo@iiitbhopal.ac.in'><i class="fa-solid fa-envelope"></i></a></li>
                    <li><a href='https://www.linkedin.com/in/prof-ajay-shrivastava-27043154' target='_blank'><i class="fa-brands fa-linkedin"></i></a></li>
                  </ul>
                </div>
              </div>
            </div>
          </div>


          <div className='contact-container'>
            <div className='contact-cards'>
              <div className='imgBox'>
                <img src='images/default-profile.png'></img>
              </div>
              <div className='contact-content'>
                <div className='contact-details'>
                  <h2>Dr. Gagan</h2>
                  <ul className='contact-icons'>
                    <li><a href='tel:7554051950'><i class="fa-solid fa-phone"></i></a></li>
                    <li><a href='mailto:tpo@iiitbhopal.ac.in'><i class="fa-solid fa-envelope"></i></a></li>
                    <li><a href='https://www.linkedin.com/in/prof-ajay-shrivastava-27043154' target='_blank'><i class="fa-brands fa-linkedin"></i></a></li>
                  </ul>
                </div>
              </div>
            </div>
          </div>

        </div>

        {/* -- Student members -- */}
        <h3>Student Coordinators</h3>
        <div className='student-members makeFlex'>

        <div className='contact-container'>
            <div className='contact-cards'>
              <div className='imgBox'>
                <img src='studentsImages/aniket.jpeg'></img>
              </div>
              <div className='contact-content'>
                <div className='contact-details'>
                  <h2>Aniket Kumar Arya</h2>
                  <ul className='contact-icons'>
                    <li><a href='tel:7717776013'><i class="fa-solid fa-phone"></i></a></li>
                    <li><a href='mailto:aniket2018pr@gmail.com'><i class="fa-solid fa-envelope"></i></a></li>
                    <li><a href='https://www.linkedin.com/in/aniket-kumar-arya-5b40131b7/' target='_blank'><i class="fa-brands fa-linkedin"></i></a></li>
                  </ul>
                </div>
              </div>
            </div>
          </div>


          <div className='contact-container'>
            <div className='contact-cards'>
              <div className='imgBox'>
                <img src='images/default-profile.png'></img>
              </div>
              <div className='contact-content'>
                <div className='contact-details'>
                  <h2>Ayush Choudhary</h2>
                  <ul className='contact-icons'>
                    <li><a href='tel:7000728910'><i class="fa-solid fa-phone"></i></a></li>
                    <li><a href='mailto:aaron.jain001@gmail.com'><i class="fa-solid fa-envelope"></i></a></li>
                    <li><a href='https://www.linkedin.com/in/ayush-choudhary-b3017418a/' target='_blank'><i class="fa-brands fa-linkedin"></i></a></li>
                  </ul>
                </div>
              </div>
            </div>
          </div>


          <div className='contact-container'>
            <div className='contact-cards'>
              <div className='imgBox'>
                <img src='studentsImages/ayush-singh.jfif'></img>
              </div>
              <div className='contact-content'>
                <div className='contact-details'>
                  <h2>Ayush Singh</h2>
                  <ul className='contact-icons'>
                    <li><a href='tel:7619024241'><i class="fa-solid fa-phone"></i></a></li>
                    <li><a href='mailto:03ayushsingh@gmail.com'><i class="fa-solid fa-envelope"></i></a></li>
                    <li><a href='https://www.linkedin.com/in/ayushsinghindia' target='_blank'><i class="fa-brands fa-linkedin"></i></a></li>
                  </ul>
                </div>
              </div>
            </div>
          </div>



          <div className='contact-container'>
            <div className='contact-cards'>
              <div className='imgBox'>
                <img src='studentsImages/darshan.jfif'></img>
              </div>
              <div className='contact-content'>
                <div className='contact-details'>
                  <h2>Darshan Patidar</h2>
                  <ul className='contact-icons'>
                    <li><a href='tel:8889769123'><i class="fa-solid fa-phone"></i></a></li>
                    <li><a href='mailto:darshanpatidar4116@gmail.com '><i class="fa-solid fa-envelope"></i></a></li>
                    <li><a href='https://www.linkedin.com/in/darshan-patidar-44650b1b9' target='_blank'><i class="fa-brands fa-linkedin"></i></a></li>
                  </ul>
                </div>
              </div>
            </div>
          </div>



          <div className='contact-container'>
            <div className='contact-cards'>
              <div className='imgBox'>
                <img src='studentsImages/sejal-nayak.jfif'></img>
              </div>
              <div className='contact-content'>
                <div className='contact-details'>
                  <h2>Sejal Nayak</h2>
                  <ul className='contact-icons'>
                    <li><a href='tel:9694301781'><i class="fa-solid fa-phone"></i></a></li>
                    <li><a href='mailto:sejalnayak2001@gmail.com'><i class="fa-solid fa-envelope"></i></a></li>
                    <li><a href='https://www.linkedin.com/mwlite/in/sejal-nayak-5800361b8' target='_blank'><i class="fa-brands fa-linkedin"></i></a></li>
                  </ul>
                </div>
              </div>
            </div>
          </div>



          <div className='contact-container'>
            <div className='contact-cards'>
              <div className='imgBox'>
                <img src='studentsImages/jai-sapkal.jfif'></img>
              </div>
              <div className='contact-content'>
                <div className='contact-details'>
                  <h2>Jai Sapkal</h2>
                  <ul className='contact-icons'>
                    <li><a href='tel:8889470730'><i class="fa-solid fa-phone"></i></a></li>
                    <li><a href='mailto:jaisapkal62@gmail.com'><i class="fa-solid fa-envelope"></i></a></li>
                    <li><a href='https://www.linkedin.com/in/jai-sapkal-5554501b3/' target='_blank'><i class="fa-brands fa-linkedin"></i></a></li>
                  </ul>
                </div>
              </div>
            </div>
          </div>



          <div className='contact-container'>
            <div className='contact-cards'>
              <div className='imgBox'>
                <img src='studentsImages/nikhil-rathore.jfif'></img>
              </div>
              <div className='contact-content'>
                <div className='contact-details'>
                  <h2>Nikhil Rathore</h2>
                  <ul className='contact-icons'>
                    <li><a href='tel:8827215240'><i class="fa-solid fa-phone"></i></a></li>
                    <li><a href='mailto:nikhilrathore329@gmail.com'><i class="fa-solid fa-envelope"></i></a></li>
                    <li><a href='https://www.linkedin.com/in/nikhil-rathore-6b7949188/' target='_blank'><i class="fa-brands fa-linkedin"></i></a></li>
                  </ul>
                </div>
              </div>
            </div>
          </div>



          <div className='contact-container'>
            <div className='contact-cards'>
              <div className='imgBox'>
                <img src='images/default-profile.png'></img>
              </div>
              <div className='contact-content'>
                <div className='contact-details'>
                  <h2>Rahul Sharma</h2>
                  <ul className='contact-icons'>
                    <li><a href='tel:7976604882'><i class="fa-solid fa-phone"></i></a></li>
                    <li><a href='mailto:rahul07sharmaoff@gmail.com'><i class="fa-solid fa-envelope"></i></a></li>
                    <li><a href='https://www.linkedin.com/in/rahul-sharma-34a781149' target='_blank'><i class="fa-brands fa-linkedin"></i></a></li>
                  </ul>
                </div>
              </div>
            </div>
          </div>



          <div className='contact-container'>
            <div className='contact-cards'>
              <div className='imgBox'>
                <img src='images/default-profile.png'></img>
              </div>
              <div className='contact-content'>
                <div className='contact-details'>
                  <h2>Kashish Goyal</h2>
                  <ul className='contact-icons'>
                    <li><a href='tel:7505742071'><i class="fa-solid fa-phone"></i></a></li>
                    <li><a href='mailto:kashishgoyal471@gmail.com'><i class="fa-solid fa-envelope"></i></a></li>
                    <li><a href='https://www.linkedin.com/in/kashish-goyal-274015191/' target='_blank'><i class="fa-brands fa-linkedin"></i></a></li>
                  </ul>
                </div>
              </div>
            </div>
          </div>

        </div>
      </div>
    </div>
  )
}

export default ContactUs