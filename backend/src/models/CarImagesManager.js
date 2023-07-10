const AbstractManager = require("./AbstractManager");

class CarImagesManager extends AbstractManager {
  constructor() {
    super({ table: "car_images" });
  }

  findAllByCar(carId) {
    return this.database.query(
      `select ci.car_id, JSON_ARRAYAGG(JSON_OBJECT('id', ci.id, 'src', ci.src)) as images from ${this.table} ci inner join cars c on c.id=ci.car_id where ci.car_id= ?`,
      [carId]
    );
  }
}

module.exports = CarImagesManager;
