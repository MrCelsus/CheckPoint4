const express = require("express");

const router = express.Router();

// const itemControllers = require("./controllers/itemControllers");

// router.get("/items", itemControllers.browse);
// router.get("/items/:id", itemControllers.read);
// router.put("/items/:id", itemControllers.edit);
// router.post("/items", itemControllers.add);
// router.delete("/items/:id", itemControllers.destroy);

const brandsControllers = require("./controllers/brandsControllers");

router.get("/brands", brandsControllers.browse);

const carModelsControllers = require("./controllers/carModelsControllers");

router.get("/models", carModelsControllers.browse);

const fuelsControllers = require("./controllers/fuelsControllers");

router.get("/fuels", fuelsControllers.browse);

const externalsControllers = require("./controllers/externalsControllers");

router.get("/externals", externalsControllers.browse);

const interiorsControllers = require("./controllers/interiorsControllers");

router.get("/interiors", interiorsControllers.browse);

const faqsControllers = require("./controllers/faqsControllers");

router.get("/faqs", faqsControllers.browse);

const carsControllers = require("./controllers/carsControllers");

router.get("/cars", carsControllers.browse);
router.get("/cars/:id", carsControllers.read);

module.exports = router;
