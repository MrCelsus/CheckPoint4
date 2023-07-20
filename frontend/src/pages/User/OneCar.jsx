/* eslint-disable import/no-unresolved */
import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import { Navigation } from "swiper/modules";
import connexion from "../../services/connexion";

function OneCar() {
  const { id } = useParams();
  const [car, setCar] = useState({
    id: null,
    brand: "",
    model: "",
    fuel_label: "",
    fiscal_power: "",
    motor_power: "",
    kilometers: "",
    ext_label: "",
    int_lab: "",
    description: "",
    price: "",
    images: [
      {
        src: "",
        image_id: null,
      },
      {
        src: "",
        image_id: null,
      },
      {
        src: "",
        image_id: null,
      },
    ],
  });
  const getCar = async () => {
    try {
      const carData = await connexion.get(`/cars/${id}`);
      setCar(carData);
    } catch (error) {
      console.error(error);
    }
  };
  useEffect(() => {
    getCar();
  }, []);
  return (
    <main className="car-container">
      <Swiper navigation modules={[Navigation]} className="mySwiper">
        {car.images.map((image) => (
          <SwiperSlide>
            <img className="picture-car" src={image.src} alt={image.src} />
          </SwiperSlide>
        ))}
      </Swiper>
      <aside>
        <h1>
          {car.brand} {car.model}
        </h1>
        <article className="car-details">
          <figure>
            <h5>Chevaux Fiscaux</h5>
            {car.fiscal_power} CV
          </figure>
          <figure>
            <h5>Puissance Moteur</h5>
            {car.motor_power} CH
          </figure>
          <figure>
            <h5>Kilométrage</h5>
            {car.kilometers} Km
          </figure>
          <figure>
            <h5>Carburant</h5>
            {car.fuel_label}
          </figure>
          <figure>
            <h5>Etat Intérieur</h5>
            {car.ext_label}
          </figure>
          <figure>
            <h5>Etat Extérieur</h5>
            {car.int_lab}
          </figure>
          <figure className="description">
            <h5>Description</h5>
            {car.description}
          </figure>
          <figure>
            <h2>{car.price} €</h2>
          </figure>
        </article>
      </aside>
    </main>
  );
}

export default OneCar;
