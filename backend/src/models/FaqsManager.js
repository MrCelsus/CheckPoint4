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

  update(faq, faqId) {
    return this.database.query(`update ${this.table} set ? where id = ?`, [
      faq,
      faqId,
    ]);
  }
}

module.exports = FaqsManager;
