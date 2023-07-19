const AbstractManager = require("./AbstractManager");

class CarModelsManager extends AbstractManager {
  constructor() {
    super({ table: "car_models" });
  }

  findAllByBrand(brand) {
    let url = `select m.id, m.model, m.brand_id, b.brand from  ${this.table} m inner join brands b on m.brand_id=b.id `;
    if (brand) {
      url += ` where m.brand_id = ? `;
    }
    return this.database.query(url, [brand]);
  }

  find(id) {
    return this.database.query(
      `select m.id, m.model, m.brand_id, b.brand from  ${this.table} m inner join brands b on m.brand_id=b.id where m.id = ?`,
      [id]
    );
  }

  insert(brandId, model) {
    return this.database.query(
      `insert into ${this.table} (brand_id, model) values (?, ?)`,
      [brandId, model]
    );
  }

  update(carModel, carModelId) {
    return this.database.query(`update ${this.table} set ? where id = ?`, [
      carModel,
      carModelId,
    ]);
  }
}

module.exports = CarModelsManager;
