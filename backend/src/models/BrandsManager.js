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
}

module.exports = BrandsManager;
