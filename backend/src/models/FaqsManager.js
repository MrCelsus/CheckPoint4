const AbstractManager = require("./AbstractManager");

class FaqsManager extends AbstractManager {
  constructor() {
    super({ table: "faqs" });
  }

  insert(question, answer) {
    return this.database.query(
      `insert into ${this.table} (question, answer) values (?, ?)`,
      [question, answer]
    );
  }
}

module.exports = FaqsManager;
