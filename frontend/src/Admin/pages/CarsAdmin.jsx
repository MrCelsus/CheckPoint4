import React, { useEffect, useState } from "react";
import connexion from "../../services/connexion";

const carModel = {
  id: null,
  modelId: "",
  fuelId: "",
  fiscalPower: "",
  motorPower: "",
  kilometers: "",
  externalId: "",
  interiorId: "",
  description: "",
  price: "",
  src1: "",
  src2: "",
  src3: "",
};

function CarsAdmin() {
  const [brands, setBrands] = useState([]);
  const [models, setModels] = useState([]);
  const [fuels, setFuels] = useState([]);
  const [externals, setExternals] = useState([]);
  const [interiors, setInteriors] = useState([]);

  const [car, setCar] = useState(carModel);
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

  const getModels = async (event) => {
    if (event) {
      try {
        const modelsData = await connexion.get(
          `/models?brand=${event.target.value}`
        );
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

  const handleCar = (event) => {
    setCar({ ...car, [event.target.name]: event.target.value });
  };

  const postCar = async (event) => {
    event.preventDefault();
    try {
      const carPost = await connexion.post("/cars", car);
      setCar(carPost.data);
    } catch (error) {
      console.error(error);
    }
  };

  const deleteCar = async (event) => {
    event.preventDefault();
    try {
      await connexion.delete(`/cars/${car.id}`);
      setCar(carModel);
    } catch (error) {
      console.error(error);
    }
  };

  const updateCar = async (event) => {
    event.preventDefault();
    try {
      await connexion.put(`/cars/${car.id}`, car);
    } catch (error) {
      console.error(error);
    }
  };

  useEffect(() => {
    getBrands();
    getModels();
    getFuels();
    getExternals();
    getInteriors();
  }, []);
  return (
    <main>
      <form onSubmit={(event) => postCar(event)}>
        <select
          name="brandId"
          id="brand"
          onChange={(event) => getModels(event)}
        >
          <option value="">Marque de la voiture</option>
          {brands.map((brand) => (
            <option value={brand.id}>{brand.brand} </option>
          ))}
        </select>
        <select
          name="modelId"
          id="modelId"
          onChange={(e) => handleCar(e)}
          value={car.modelId}
        >
          <option value="">Modèle de la voiture</option>
          {models.map((model) => (
            <option value={model.id} key={model.id}>
              {model.model}
            </option>
          ))}
        </select>
        <label htmlFor="fiscalPower">
          Puissance fiscale du véhicule :
          <input
            type="number"
            name="fiscalPower"
            id="fiscalPower"
            min={0}
            max={6}
            required
            onChange={(e) => handleCar(e)}
            value={car.fiscalPower}
          />
          CV
        </label>
        <label htmlFor="motorPower">
          Puissance moteur du véhicule :
          <input
            type="number"
            name="motorPower"
            id="motorPower"
            min={0}
            max={110}
            onChange={(e) => handleCar(e)}
            value={car.motorPower}
            required
          />
          CH
        </label>
        <select
          name="fuelId"
          id="fuelId"
          onChange={(e) => handleCar(e)}
          value={car.fuelId}
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
          />{" "}
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
          name="externalId"
          id="externalId"
          onChange={(e) => handleCar(e)}
          value={car.externalId}
        >
          <option value="">Etat extérieur de la voiture </option>
          {externals.map((ext) => (
            <option value={ext.id} key={ext.id}>
              {ext.label}
            </option>
          ))}
        </select>
        <select
          name="interiorId"
          id="interiorId"
          onChange={(e) => handleCar(e)}
          value={car.interiorId}
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
            name="src1"
            id="src1"
            required
            onChange={(e) => handleCar(e)}
            value={car.src1}
          />
        </label>
        <label htmlFor="src2">
          2ème Image :
          <input
            type="text"
            name="src2"
            id="src2"
            required
            onChange={(e) => handleCar(e)}
            value={car.src2}
          />
        </label>
        <label htmlFor="src3">
          3ème Image :
          <input
            type="text"
            name="src3"
            id="src3"
            required
            onChange={(e) => handleCar(e)}
            value={car.src3}
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
