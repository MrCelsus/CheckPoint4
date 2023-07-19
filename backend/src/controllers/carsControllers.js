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
  try {
    const car = await models.cars.insert(cars);
    const image1 = await models.carImages.insert(
      cars.images[0].src,
      car[0].insertId
    );
    const image2 = await models.carImages.insert(
      cars.images[1].src,
      car[0].insertId
    );
    const image3 = await models.carImages.insert(
      cars.images[2].src,
      car[0].insertId
    );
    res.location(`/cars/${car[0].insertId}`);
    res.location(`/images/${image1[0].insertId}`);
    res.location(`/images/${image2[0].insertId}`);
    res.location(`/images/${image3[0].insertId}`);
    res.status(201).json({ ...cars, id: car[0].insertId });
  } catch (error) {
    console.error(error);
    res.sendStatus(500);
  }
};

const edit = async (req, res) => {
  const cars = req.body;
  const { images } = cars;
  const carId = parseInt(req.params.id, 10);
  try {
    await models.cars.update(cars, carId);
    await models.carImages.update(images[0]);
    await models.carImages.update(images[1]);
    await models.carImages.update(images[2]);
    res.sendStatus(200);
  } catch (error) {
    console.error(error);
    res.sendStatus(500);
  }
};

const destroy = (req, res) => {
  models.cars
    .delete(req.params.id)
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
  destroy,
};
