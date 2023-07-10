const models = require("../models");

const browse = (req, res) => {
  models.brands
    .findAll()
    .then(([brands]) => {
      res.send(brands);
    })
    .catch((err) => {
      console.error(err);
      res.sendStatus(500);
    });
};

module.exports = {
  browse,
};
