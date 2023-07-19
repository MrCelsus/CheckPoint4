import React, { useEffect, useState } from "react";
import connexion from "../../services/connexion";

const carModel = {
  id: null,
  brand_id: "",
  model_id: "",
  fuel_id: "",
  fiscal_power: "",
  motor_power: "",
  kilometers: "",
  external_id: "",
  interior_id: "",
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
};

function CarsAdmin() {
  const [brands, setBrands] = useState([]);
  const [models, setModels] = useState([]);
  const [fuels, setFuels] = useState([]);
  const [externals, setExternals] = useState([]);
  const [interiors, setInteriors] = useState([]);
  const [cars, setCars] = useState([]);
  const [car, setCar] = useState(carModel);

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

  const getBrands = async () => {
    try {
      const brandsData = await connexion.get("/brands");
      if (brandsData) {
        setBrands(brandsData);
      }
    } catch (error) {
      console.error(error);
    }
  };

  const getModels = async () => {
    let url = `/models`;
    if (car.brand_id) {
      url += `?brand=${car.brand_id}`;
      try {
        const modelsData = await connexion.get(url);
        if (modelsData) {
          setModels(modelsData);
        }
      } catch (error) {
        console.error(error);
      }
    }
  };

  const getFuels = async () => {
    try {
      const fuelsData = await connexion.get("/fuels");
      if (fuelsData) {
        setFuels(fuelsData);
      }
    } catch (error) {
      console.error(error);
    }
  };

  const getExternals = async () => {
    try {
      const externalsData = await connexion.get("/externals");
      if (externalsData) {
        setExternals(externalsData);
      }
    } catch (error) {
      console.error(error);
    }
  };

  const getInteriors = async () => {
    try {
      const interiorsData = await connexion.get("/interiors");
      if (interiorsData) {
        setInteriors(interiorsData);
      }
    } catch (error) {
      console.error(error);
    }
  };

  const handleCar = (event, index) => {
    if (event.target.name.includes("image")) {
      const provCars = { ...car };
      provCars.images[index].src = event.target.value;
      setCar(provCars);
    } else {
      setCar({ ...car, [event.target.name]: event.target.value });
    }
  };

  const postCar = async (event) => {
    event.preventDefault();
    try {
      const carPost = await connexion.post("/cars", car);
      setCar(carPost.data);
      getCars();
    } catch (error) {
      console.error(error);
    }
  };

  const deleteCar = async (event) => {
    event.preventDefault();
    try {
      await connexion.delete(`/cars/${car.id}`);
      setCar(carModel);
      getCars();
    } catch (error) {
      console.error(error);
    }
  };

  const updateCar = async (event) => {
    event.preventDefault();
    try {
      await connexion.put(`/cars/${car.id}`, car);
      getCars();
    } catch (error) {
      console.error(error);
    }
  };

  const updateCarState = (id) => {
    if (id === "") {
      setCar(carModel);
    } else {
      setCar(cars.find((theCar) => theCar.id === +id));
    }
  };

  useEffect(() => {
    getCars();
    getBrands();
    getModels();
    getFuels();
    getExternals();
    getInteriors();
  }, [car.brand_id]);

  return (
    <main>
      <h1>Liste des voitures </h1>
      <select
        name="cars"
        id="cars"
        onChange={(event) => updateCarState(event.target.value)}
      >
        <option value="">Rafraîchir</option>
        {cars.map((oneCar) => (
          <option value={oneCar.id} key={oneCar.id}>
            {oneCar.brand} {oneCar.model} / {oneCar.price}€
          </option>
        ))}
      </select>
      <form onSubmit={(event) => postCar(event)}>
        <select
          name="brand_id"
          onChange={(event) => handleCar(event)}
          value={car.brand_id}
          required
        >
          <option value="">Marque de la voiture</option>
          {brands.map((brand) => (
            <option value={brand.id}>{brand.brand} </option>
          ))}
        </select>
        <select
          name="model_id"
          onChange={(e) => handleCar(e)}
          value={car.model_id}
          required
        >
          <option value="">Modèle de la voiture</option>
          {models.map((model) => (
            <option value={model.id} key={model.id}>
              {model.model}
            </option>
          ))}
        </select>
        <label htmlFor="fiscal_power">
          Puissance fiscale du véhicule :
          <input
            type="number"
            name="fiscal_power"
            min={0}
            max={6}
            required
            onChange={(e) => handleCar(e)}
            value={car.fiscal_power}
          />
          CV
        </label>
        <label htmlFor="motorPower">
          Puissance moteur du véhicule :
          <input
            type="number"
            name="motor_power"
            id="motorPower"
            min={0}
            max={110}
            onChange={(e) => handleCar(e)}
            value={car.motor_power}
            required
          />
          CH
        </label>
        <select
          name="fuel_id"
          onChange={(e) => handleCar(e)}
          value={car.fuel_id}
          required
        >
          <option value="">Type de carburant</option>
          {fuels.map((fuel) => (
            <option value={fuel.id} key={fuel.id}>
              {fuel.label}
            </option>
          ))}
        </select>
        <label htmlFor="kilometers">
          Kilométrage de la voiture :
          <input
            type="number"
            name="kilometers"
            id="kilometers"
            min={0}
            onChange={(e) => handleCar(e)}
            value={car.kilometers}
            required
          />
          Km
        </label>
        <label htmlFor="price">
          Le prix :
          <input
            type="number"
            name="price"
            id="price"
            min={0}
            required
            onChange={(e) => handleCar(e)}
            value={car.price}
          />
          €
        </label>
        <label htmlFor="description">
          Description :
          <textarea
            name="description"
            id="description"
            cols="40"
            rows="10"
            autoComplete="off"
            minLength={50}
            maxLength={350}
            onChange={(e) => handleCar(e)}
            value={car.description}
            required
          />
        </label>
        <select
          name="external_id"
          id="externalId"
          onChange={(e) => handleCar(e)}
          value={car.external_id}
          required
        >
          <option value="">Etat extérieur de la voiture </option>
          {externals.map((ext) => (
            <option value={ext.id} key={ext.id}>
              {ext.label}
            </option>
          ))}
        </select>
        <select
          name="interior_id"
          id="interiorId"
          onChange={(e) => handleCar(e)}
          value={car.interior_id}
          required
        >
          <option value="">Etat intérieur de la voiture</option>
          {interiors.map((int) => (
            <option value={int.id} key={int.id}>
              {int.label}
            </option>
          ))}
        </select>
        <label htmlFor="src1">
          1ère Image :
          <input
            type="text"
            name="image0"
            required
            onChange={(e) => handleCar(e, 0)}
            value={car.images[0].src}
          />
        </label>
        <label htmlFor="src2">
          2ème Image :
          <input
            type="text"
            name="image1"
            required
            onChange={(e) => handleCar(e, 1)}
            value={car.images[1].src}
          />
        </label>
        <label htmlFor="src3">
          3ème Image :
          <input
            type="text"
            name="image2"
            required
            onChange={(e) => handleCar(e, 2)}
            value={car.images[2].src}
          />
        </label>
        {!car.id && <button type="submit">Ajouter</button>}
      </form>
      {car.id && (
        <>
          <button type="button" onClick={(e) => deleteCar(e)}>
            Supprimer
          </button>
          <button type="button" onClick={(e) => updateCar(e)}>
            Modifier
          </button>
        </>
      )}
    </main>
  );
}

export default CarsAdmin;
