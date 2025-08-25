import React from "react";
import data from '../Data'
import Card from "./Card";

const Home = () => {
  return (
    <div className="container mt-4">
      <h1 className="heading rounded-pill text-center text-dark mb-4"
      style={{
    border: "4px dashed #ff5733",
    color: "#2c3e50",
    background: "linear-gradient(to right, #ead468ff, #f57c7eff)",
  }}>
        Journey Junction
      </h1>

      <div className="row">
        {data.map((place) => (
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
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Home;
