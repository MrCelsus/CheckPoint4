const models = require("../models");

const browse = (req, res) => {
  const { brand } = req.query;
  models.carModels
    .findAllByBrand(brand)
    .then(([carModels]) => {
      res.send(carModels);
    })
    .catch((err) => {
      console.error(err);
      res.sendStatus(500);
    });
};

const read = (req, res) => {
  models.carModels
    .find(req.params.id)
    .then(([carModels]) => {
      if (carModels[0] == null) {
        res.sendStatus(404);
      } else {
        res.send(carModels[0]);
      }
    })
    .catch((err) => {
      console.error(err);
      res.sendStatus(500);
    });
};

const add = (req, res) => {
  const carModels = req.body.model;
  const brandId = parseInt(req.body.brand_id, 10);

  models.carModels
    .insert(brandId, carModels)
    .then(([result]) => {
      res.location(`/models/${result.insertId}`).sendStatus(201);
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
};
