require("dotenv").config();

const mysql = require("mysql2/promise");

// create a connection pool to the database

const { DB_HOST, DB_PORT, DB_USER, DB_PASSWORD, DB_NAME } = process.env;

const pool = mysql.createPool({
  host: DB_HOST,
  port: DB_PORT,
  user: DB_USER,
  password: DB_PASSWORD,
  database: DB_NAME,
});

// try a connection

pool.getConnection().catch(() => {
  console.warn(
    "Warning:",
    "Failed to get a DB connection.",
    "Did you create a .env file with valid credentials?",
    "Routes using models won't work as intended"
  );
});

// declare and fill models: that's where you should register your own managers

const models = {};

const ItemManager = require("./ItemManager");

models.item = new ItemManager();
models.item.setDatabase(pool);

const BrandsManager = require("./BrandsManager");

models.brands = new BrandsManager();
models.brands.setDatabase(pool);

const CarModelsManager = require("./CarModelsManager");

models.carModels = new CarModelsManager();
models.carModels.setDatabase(pool);

const FuelsManager = require("./FuelsManager");

models.fuels = new FuelsManager();
models.fuels.setDatabase(pool);

const ExternalsManager = require("./ExternalsManager");

models.externals = new ExternalsManager();
models.externals.setDatabase(pool);

const InteriorsManager = require("./InteriorsManager");

models.interiors = new InteriorsManager();
models.interiors.setDatabase(pool);

const FaqsManager = require("./FaqsManager");

models.faqs = new FaqsManager();
models.faqs.setDatabase(pool);

const CarsManager = require("./CarsManager");

models.cars = new CarsManager();
models.cars.setDatabase(pool);

const CarImagesManager = require("./CarImagesManager");

models.carImages = new CarImagesManager();
models.carImages.setDatabase(pool);

// bonus: use a proxy to personalize error message,
// when asking for a non existing model

const handler = {
  get(obj, prop) {
    if (prop in obj) {
      return obj[prop];
    }

    const pascalize = (string) =>
      string.slice(0, 1).toUpperCase() + string.slice(1);

    throw new ReferenceError(
      `models.${prop} is not defined. Did you create ${pascalize(
        prop
      )}Manager.js, and did you register it in backend/src/models/index.js?`
    );
  },
};

module.exports = new Proxy(models, handler);
