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

module.exports = {
  browse,
};
