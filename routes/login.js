const { Router } = require("express");
const { LoginController } = require("../controller");

const router = Router()

router.post('/', LoginController.login)

module.exports = router