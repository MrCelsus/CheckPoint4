const AbstractManager = require("./AbstractManager");

class FuelsManager extends AbstractManager {
  constructor() {
    super({ table: "fuels" });
  }
}

module.exports = FuelsManager;
