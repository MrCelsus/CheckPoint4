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
  const faqs = req.body;
  const { question, answer } = faqs;

  models.faqs
    .insert(question, answer)
    .then(([faq]) => {
      res
        .location(`/faqs/${faq.insertId}`)
        .status(201)
        .json({ ...faqs, id: faq.insertId });
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

const destroy = (req, res) => {
  models.faqs
    .delete(req.params.id)
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
  destroy,
};
