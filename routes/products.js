const { Router } = require("express");
const { ProductsController } = require("../controller");
const router = Router()

router.get('/productKategoris', ProductsController.readAllProductKategoris)

router.get('/productKategoris/:id', ProductsController.readOneProductKategoris)

module.exports = router;
