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

const read = (req, res) => {
  models.faqs
    .find(req.params.id)
    .then(([faqs]) => {
      if (faqs[0] == null) {
        res.sendStatus(404);
      } else {
        res.send(faqs[0]);
      }
    })
    .catch((err) => {
      console.error(err);
      res.sendStatus(500);
    });
};

const add = (req, res) => {
  const { question, answer } = req.body;

  models.faqs
    .insert(question, answer)
    .then(([result]) => {
      res.location(`/faqs/${result.insertId}`).sendStatus(201);
    })
    .catch((err) => {
      console.error(err);
      res.sendStatus(500);
    });
};

const edit = (req, res) => {
  const faq = req.body;
  const faqId = parseInt(req.params.id, 10);

  models.faqs
    .update(faq, faqId)
    .then(([result]) => {
      if (result.affectedRows === 0) {
        res.sendStatus(404);
      } else {
        res.sendStatus(204);
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
  add,
  edit,
};
