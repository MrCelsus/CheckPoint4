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
router.get("/brands/:id", brandsControllers.read);

const carModelsControllers = require("./controllers/carModelsControllers");

router.get("/models", carModelsControllers.browse);
router.get("/models/:id", carModelsControllers.read);

const fuelsControllers = require("./controllers/fuelsControllers");

router.get("/fuels", fuelsControllers.browse);
router.get("/fuels/:id", fuelsControllers.read);

const externalsControllers = require("./controllers/externalsControllers");

router.get("/externals", externalsControllers.browse);
router.get("/externals/:id", externalsControllers.read);

const interiorsControllers = require("./controllers/interiorsControllers");

router.get("/interiors", interiorsControllers.browse);
router.get("/interiors/:id", interiorsControllers.read);

const faqsControllers = require("./controllers/faqsControllers");

router.get("/faqs", faqsControllers.browse);
router.get("/faqs/:id", faqsControllers.read);

const carsControllers = require("./controllers/carsControllers");

router.get("/cars", carsControllers.browse);
router.get("/cars/:id", carsControllers.read);

module.exports = router;
