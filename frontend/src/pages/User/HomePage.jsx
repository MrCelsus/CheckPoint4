import React, { useState, useEffect } from "react";
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
        <CarsCard car={car} />
      ))}
    </main>
  );
}

export default HomePage;
