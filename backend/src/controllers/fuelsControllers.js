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

const read = (req, res) => {
  models.fuels
    .find(req.params.id)
    .then(([fuels]) => {
      if (fuels[0] == null) {
        res.sendStatus(404);
      } else {
        res.send(fuels[0]);
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
