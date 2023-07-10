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

module.exports = {
  browse,
};
