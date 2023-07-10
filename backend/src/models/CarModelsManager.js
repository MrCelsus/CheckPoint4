const AbstractManager = require("./AbstractManager");

class CarModelsManager extends AbstractManager {
  constructor() {
    super({ table: "car_models" });
  }

  findAllByBrand(brand) {
    let url = `select m.id, m.model, b.brand from  ${this.table} m inner join brands b on m.brand_id=b.id `;
    if (brand) {
      url += ` where b.brand = ? `;
    }
    return this.database.query(url, [brand]);
  }

  find(id) {
    return this.database.query(
      `select m.id, m.model, b.brand from  ${this.table} m inner join brands b on m.brand_id=b.id where m.id = ?`,
      [id]
    );
  }
}

module.exports = CarModelsManager;
