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

const read = (req, res) => {
  models.interiors
    .find(req.params.id)
    .then(([interiors]) => {
      if (interiors[0] == null) {
        res.sendStatus(404);
      } else {
        res.send(interiors[0]);
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
