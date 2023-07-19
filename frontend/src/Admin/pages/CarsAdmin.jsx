import React, { useEffect, useState } from "react";
import connexion from "../../services/connexion";

function CarsAdmin() {
  const [brands, setBrands] = useState([]);
  const [models, setModels] = useState([]);
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
  };

  useEffect(() => {
    getBrands();
    getModels();
  }, []);
  return (
    <main>
      <form action="">
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
        <select name="modelId" id="modelId">
          <option value="">Modèle de la voiture</option>
          {models.map((model) => (
            <option value="modelId" key={model.id}>
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
          />{" "}
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
            required
          />{" "}
          CH
        </label>
        <select name="fuelId" id="fuelId">
          <option value="">titi</option>
          <option value="">tutu</option>
          <option value="">ouioui</option>
        </select>
        <label htmlFor="kilometers">
          Kilométrage de la voiture :
          <input
            type="number"
            name="kilometers"
            id="kilometers"
            min={0}
            required
          />{" "}
          Km
        </label>
        <label htmlFor="price">
          Le prix :
          <input type="number" name="price" id="price" min={0} required /> €
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
            required
          />
        </label>
        <select name="externalId" id="externalId">
          <option value="">ibsdqisd</option>
          <option value="">fgbqq</option>
          <option value="">nsqnq</option>
        </select>
        <select name="interiorId" id="interiorId">
          <option value="">ffffff</option>
          <option value="">sssssssss</option>
          <option value="">hhhhh</option>
        </select>
        <label htmlFor="image1">
          1ère Image :
          <input type="text" name="image1" id="image1" />
        </label>
        <label htmlFor="image2">
          2ème Image :
          <input type="text" name="image2" id="image2" />
        </label>
        <label htmlFor="image3">
          3ème Image :
          <input type="text" name="image3" id="image3" />
        </label>
      </form>
    </main>
  );
}

export default CarsAdmin;
