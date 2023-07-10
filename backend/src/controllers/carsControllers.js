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

module.exports = {
  browse,
  read,
};
