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

module.exports = {
  browse,
};
