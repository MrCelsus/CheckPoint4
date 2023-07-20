import React from "react";
import { Link } from "react-router-dom";

function CarsCard({ car }) {
  return (
    <section className="car-card">
      <Link to={`cars/${car.id}`}>
        <img src={car.images[0].src} alt="" />
        <figure>
          <h2>
            {car.brand} {car.model}
          </h2>
          <h3>{car.price} €</h3>
        </figure>
      </Link>
    </section>
  );
}

export default CarsCard;
