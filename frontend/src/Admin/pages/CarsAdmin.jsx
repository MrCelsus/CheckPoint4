import React from "react";

function CarsAdmin() {
  return (
    <main>
      <form action="">
        <select name="brand" id="brand">
          <option value="">oui1</option>
          <option value="">oui2</option>
          <option value="">oui3</option>
        </select>
        <select name="modelId" id="modelId">
          <option value="">Oui</option>
          <option value="">NNon</option>
          <option value="">TOTO</option>
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
