import React, { useEffect } from 'react'
import Recruiters from '../Recruiters/Recruiters'
// import Header from '../Utility/Header/Header'
// import StatsCard from '../Utility/StatsCard/StatsCard'
import './Placements.css';
function Placements() {

  return (
    <div className='placements' id='stats'>
      <h1 className='placement-heading'>Placements Statistics</h1>

      {/* carousel */}
      <div id="carouselExampleIndicators" className="carousel slide" data-bs-ride="carousel">
        <div className="carousel-indicators">
          <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="0" className="active makeBlack" aria-current="true" aria-label="Slide 1"></button>
          <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="1" className="makeBlack" aria-label="Slide 2"></button>
          <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="2" className="makeBlack" aria-label="Slide 3"></button>
        </div>
        <div className="carousel-inner">
          <div className="carousel-item active">
            <img src="Placement_img/placement-1.png" className="d-block w-100 placement-image" alt="..." />
          </div>
          <div className="carousel-item">
            <img src="Placement_img/placement-2.png" className="d-block w-100 placement-image" alt="..." />
          </div>
          <div className="carousel-item">
            <img src="Placement_img/placement-3.png" className="d-block w-100 placement-image" alt="..."/>
          </div>
        </div>
        <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="prev">
          <span className="carousel-control-prev-icon makeColorBlack" aria-hidden="true"></span>
          <span className="visually-hidden">Previous</span>
        </button>
        <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="next">
          <span className="carousel-control-next-icon makeColorBlack" aria-hidden="true"></span>
          <span className="visually-hidden">Next</span>
        </button>
      </div>

      <Recruiters />
    </div>
  )
}

export default Placements
