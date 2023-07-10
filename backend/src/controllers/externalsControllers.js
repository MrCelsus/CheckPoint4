const models = require("../models");

const browse = (req, res) => {
  models.externals
    .findAll()
    .then(([externals]) => {
      res.send(externals);
    })
    .catch((err) => {
      console.error(err);
      res.sendStatus(500);
    });
};

const read = (req, res) => {
  models.externals
    .find(req.params.id)
    .then(([externals]) => {
      if (externals[0] == null) {
        res.sendStatus(404);
      } else {
        res.send(externals[0]);
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
