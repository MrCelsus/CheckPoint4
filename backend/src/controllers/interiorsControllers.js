const models = require("../models");

const browse = (req, res) => {
  models.interiors
    .findAll()
    .then(([interiors]) => {
      res.send(interiors);
    })
    .catch((err) => {
      console.error(err);
      res.sendStatus(500);
    });
};

module.exports = {
  browse,
};
