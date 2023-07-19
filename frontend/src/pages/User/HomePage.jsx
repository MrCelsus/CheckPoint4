import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import connexion from "../../services/connexion";
import CarsCard from "../../components/CarsCard";

function HomePage() {
  const [cars, setCars] = useState([]);
  const getCars = async () => {
    try {
      const carsData = await connexion.get("/cars");
      if (carsData) {
        setCars(carsData);
      }
    } catch (error) {
      console.error(error);
    }
  };
  useEffect(() => {
    getCars();
  }, []);
  return (
    <main>
      <h1>Liste des voitures</h1>
      {cars.map((car) => (
        <Link to={`/cars/${car.id}`}>
          <CarsCard car={car} />
        </Link>
      ))}
    </main>
  );
}

export default HomePage;
