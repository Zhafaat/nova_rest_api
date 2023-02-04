const { Router } = require("express");
const { KategorisController } = require("../controller");

const router = Router()

router.get('/stockProduct', KategorisController.readAllStockProduct)

router.get('/stockProduct/:id', KategorisController.readOneStockProduct)

module.exports = router;