const models = require("../models");

const browse = (req, res) => {
  models.cars
    .findAll()
    .then(([cars]) => {
      res.send(cars);
    })
    .catch((err) => {
      console.error(err);
      res.sendStatus(500);
    });
};

const read = (req, res) => {
  models.cars
    .find(req.params.id)
    .then(([cars]) => {
      if (cars[0] == null) {
        res.sendStatus(404);
      } else {
        res.send(cars[0]);
      }
    })
    .catch((err) => {
      console.error(err);
      res.sendStatus(500);
    });
};

const add = async (req, res) => {
  const cars = req.body;
  const {
    modelId,
    fiscalPower,
    motorPower,
    kilometers,
    description,
    price,
    externalId,
    interiorId,
    fuelId,
    images,
  } = cars;
  try {
    const car = await models.cars.insert(
      modelId,
      fiscalPower,
      motorPower,
      kilometers,
      description,
      price,
      externalId,
      interiorId,
      fuelId,
      images
    );
    const image1 = await models.carImages.insert(images.src1, car[0].insertId);
    const image2 = await models.carImages.insert(images.src2, car[0].insertId);
    const image3 = await models.carImages.insert(images.src3, car[0].insertId);
    res.location(`/cars/${car[0].insertId}`);
    res.location(`/images/${image1[0].insertId}`);
    res.location(`/images/${image2[0].insertId}`);
    res.location(`/images/${image3[0].insertId}`);
    res.sendStatus(201);
  } catch (error) {
    console.error(error);
    res.sendStatus(500);
  }
};

const edit = (req, res) => {
  const car = req.body;

  const carId = parseInt(req.params.id, 10);

  models.cars
    .update(car, carId)
    .then(([result]) => {
      if (result.affectedRows === 0) {
        res.sendStatus(404);
      } else {
        res.sendStatus(204);
      }
    })
    .catch((err) => {
      console.error(err);
      res.sendStatus(500);
    });
};

module.exports = {
  browse,
  read,
  add,
  edit,
};
