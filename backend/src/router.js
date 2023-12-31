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

router.post("/brands", brandsControllers.add);
router.put("/brands/:id", brandsControllers.edit);
router.delete("/brands/:id", brandsControllers.destroy);

const carModelsControllers = require("./controllers/carModelsControllers");

router.get("/models", carModelsControllers.browse);
router.get("/models/:id", carModelsControllers.read);

router.post("/models", carModelsControllers.add);
router.put("/models/:id", carModelsControllers.edit);
router.delete("/models/:id", carModelsControllers.destroy);

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

router.post("/faqs", faqsControllers.add);
router.put("/faqs/:id", faqsControllers.edit);
router.delete("/faqs/:id", faqsControllers.destroy);

const carsControllers = require("./controllers/carsControllers");

router.get("/cars", carsControllers.browse);
router.get("/cars/:id", carsControllers.read);

router.post("/cars", carsControllers.add);
router.put("/cars/:id", carsControllers.edit);
router.delete("/cars/:id", carsControllers.destroy);

module.exports = router;
