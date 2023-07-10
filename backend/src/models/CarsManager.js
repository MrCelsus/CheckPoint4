const AbstractManager = require("./AbstractManager");

class CarsManager extends AbstractManager {
  constructor() {
    super({ table: "cars" });
  }

  findAll() {
    return this.database.query(
      `select c.id, c.fiscal_power, c.motor_power, c.kilometers, c.description, c.price, m.model, b.brand, ext.label ext_label, interiors.label int_label, f.label fuel_label, JSON_ARRAYAGG(JSON_OBJECT('image_id', ci.id, 'src', ci.src)) as images from ${this.table} c inner join car_models m on c.model_id=m.id inner join brands b on m.brand_id=b.id inner join externals ext on c.external_id=ext.id inner join interiors on c.interior_id=interiors.id inner join fuels f on c.fuel_id=f.id inner join car_images ci on c.id=ci.car_id group by c.id`
    );
  }

  find(id) {
    return this.database.query(
      `select c.id, c.fiscal_power, c.motor_power, c.kilometers, c.description, c.price, m.model, b.brand, ext.label ext_label, interiors.label int_label, f.label fuel_label, JSON_ARRAYAGG(JSON_OBJECT('image_id', ci.id, 'src', ci.src)) as images from ${this.table} c inner join car_models m on c.model_id=m.id inner join brands b on m.brand_id=b.id inner join externals ext on c.external_id=ext.id inner join interiors on c.interior_id=interiors.id inner join fuels f on c.fuel_id=f.id inner join car_images ci on c.id=ci.car_id where c.id = ?`,
      [id]
    );
  }

  insert(
    modelId,
    fiscalPower,
    motorPower,
    kilometers,
    description,
    price,
    externalId,
    interiorId,
    fuelId
  ) {
    return this.database.query(
      `insert into ${this.table} (model_id, fiscal_power, motor_power, kilometers, description, price, external_id, interior_id, fuel_id) values (?, ?, ?, ?, ?, ?, ?, ?, ?)`,
      [
        modelId,
        fiscalPower,
        motorPower,
        kilometers,
        description,
        price,
        externalId,
        interiorId,
        fuelId,
      ]
    );
  }
}

module.exports = CarsManager;
