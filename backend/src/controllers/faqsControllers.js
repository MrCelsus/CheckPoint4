const models = require("../models");

const browse = (req, res) => {
  models.faqs
    .findAll()
    .then(([faqs]) => {
      res.send(faqs);
    })
    .catch((err) => {
      console.error(err);
      res.sendStatus(500);
    });
};

module.exports = {
  browse,
};
