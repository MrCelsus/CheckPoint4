const AbstractManager = require("./AbstractManager");

class CarImagesManager extends AbstractManager {
  constructor() {
    super({ table: "car_images" });
  }

  findAllByCar(carId) {
    return this.database.query(
      `select ci.car_id, JSON_ARRAYAGG(JSON_OBJECT('id', ci.id, 'src', ci.src)) as images from ${this.table} ci inner join cars c on c.id=ci.car_id where ci.car_id= ? group by c.id`,
      [carId]
    );
  }

  insert(image, carId) {
    return this.database.query(
      `insert into ${this.table} (src, car_id) values (?, ?)`,
      [image, carId]
    );
  }
}

module.exports = CarImagesManager;
