const AbstractManager = require("./AbstractManager");

class BrandsManager extends AbstractManager {
  constructor() {
    super({ table: "brands" });
  }

  insert(brand, logo) {
    return this.database.query(
      `insert into ${this.table} (brand, logo) values (?,?)`,
      [brand, logo]
    );
  }

  update(brand, brandId) {
    return this.database.query(`update ${this.table} set ? where id = ?`, [
      brand,
      brandId,
    ]);
  }
}

module.exports = BrandsManager;
