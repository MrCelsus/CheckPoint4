import React from "react";

function CarsCard({ car }) {
  return (
    <article>
      <img src={car.images[0].src} alt="" />
      <h2>
        {car.brand} {car.model}
      </h2>
      <h3>{car.price} €</h3>
    </article>
  );
}

export default CarsCard;
