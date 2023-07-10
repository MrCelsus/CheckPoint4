const AbstractManager = require("./AbstractManager");

class CarModelsManager extends AbstractManager {
  constructor() {
    super({ table: "car_models" });
  }
}

module.exports = CarModelsManager;
