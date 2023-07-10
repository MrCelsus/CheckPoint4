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

const read = (req, res) => {
  models.brands
    .find(req.params.id)
    .then(([brands]) => {
      if (brands[0] == null) {
        res.sendStatus(404);
      } else {
        res.send(brands[0]);
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
