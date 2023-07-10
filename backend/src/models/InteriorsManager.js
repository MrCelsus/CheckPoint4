const AbstractManager = require("./AbstractManager");

class InteriorsManager extends AbstractManager {
  constructor() {
    super({ table: "interiors" });
  }
}

module.exports = InteriorsManager;
