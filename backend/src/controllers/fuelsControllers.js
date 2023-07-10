const models = require("../models");

const browse = (req, res) => {
  models.fuels
    .findAll()
    .then(([fuels]) => {
      res.send(fuels);
    })
    .catch((err) => {
      console.error(err);
      res.sendStatus(500);
    });
};

module.exports = {
  browse,
};
