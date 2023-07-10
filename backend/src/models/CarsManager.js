const AbstractManager = require("./AbstractManager");

class CarsManager extends AbstractManager {
  constructor() {
    super({ table: "cars" });
  }
}

module.exports = CarsManager;
