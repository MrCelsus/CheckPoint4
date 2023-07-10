const AbstractManager = require("./AbstractManager");

class FaqsManager extends AbstractManager {
  constructor() {
    super({ table: "faqs" });
  }
}

module.exports = FaqsManager;
