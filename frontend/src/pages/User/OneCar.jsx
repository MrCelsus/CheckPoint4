import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import connexion from "../../services/connexion";

function OneCar() {
  const { id } = useParams();
  const [car, setCar] = useState([]);
  const getCar = async () => {
    try {
      const carData = await connexion.get(`/cars/${id}`);
      if (carData) {
        setCar(carData);
      }
    } catch (error) {
      console.error(error);
    }
  };
  useEffect(() => {
    getCar();
  }, []);
  return (
    <main>
      <h1>
        {car.brand} {car.model}
      </h1>
      {car.description} <br />
      {car.price} € <br />
      {car.fiscal_power}
      {car.images.map((image) => (
        <img src={image.src} alt="" />
      ))}
    </main>
  );
}

export default OneCar;
