import React, { useState } from "react";
import data from "../Data";


const Card = () => {
    const[places ,setPlaces]=useState(data)

  const handleDelete = (id) => {
    const newPlaces = places.filter((place) => place.id !== id)
    setPlaces(newPlaces);
  };


  return (
   <>
  return (
    <div className="container mt-4">
      <h1 className="heading text-center mb-4"> Journey Junction</h1>

      <div className="row">
        {places.map((place) => (
          <div key={place.id} className="col-md-4 mb-4">
            <div className="card h-100 shadow">
              <img
                src={place.image}
                className="card-img-top"
                alt={place.name}
                style={{ height: "200px", objectFit: "cover" }}
              />
              <div className="card-body">
                <h5 className="card-title">{place.name}</h5>
                <p className="card-text" style={{ fontSize: "14px" }}>
                  {place.info}
                </p>
                <h6 className="text-primary">Price: ₹{place.price}</h6>

               
                <button
                  className="btn btn-danger mt-2"
                  onClick={() => handleDelete(place.id)}
                >
                  Delete
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  )


   </>
  )
}

export default Card