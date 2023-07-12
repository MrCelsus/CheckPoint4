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

const edit = (req, res) => {
  const carModel = req.body;
  const carModelId = parseInt(req.params.id, 10);

  models.carModels
    .update(carModel, carModelId)
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

const destroy = (req, res) => {
  models.carModels
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
