import React from 'react'

function TeamCard({ name, position, phone, email }) {
  return (
    <div className="card" style={{ width: '18rem' }}>
      <img src="images/collegeLogo.svg" className="card-img-top" width={150} height={150} alt={`${name} image`} />
      <div className="card-body">
        <h5 className="card-title">{name}</h5>
        <p className="card-text">{position}</p>
        <p className="card-text">{phone}</p>
        <p className="card-text">{email}</p>

        <a href="#" className="btn btn-primary">Go somewhere</a>
      </div>
    </div>
  )
}

export default TeamCard