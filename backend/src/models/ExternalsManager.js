const AbstractManager = require("./AbstractManager");

class ExternalsManager extends AbstractManager {
  constructor() {
    super({ table: "externals" });
  }
}

module.exports = ExternalsManager;