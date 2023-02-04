const { Router } = require("express");
const { TransaksisController } = require("../controller");
const router = Router()

router.get('/transaksi', TransaksisController.readAllTransaksi)

router.get('/transaksi/:id', TransaksisController.readOneTransaksi)

router.get('/transaksiPerBulan', TransaksisController.readTransaksiInMonth)

module.exports = router;
