const models = require("../models");

const browse = (req, res) => {
  models.carModels
    .findAll()
    .then(([carModels]) => {
      res.send(carModels);
    })
    .catch((err) => {
      console.error(err);
      res.sendStatus(500);
    });
};

module.exports = {
  browse,
};
