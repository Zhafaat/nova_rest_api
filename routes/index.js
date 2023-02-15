const { Router } = require("express");
const router = Router()

const kategorisRouter = require('./kategoris')
const transaksisRouter = require('./transaksis')
const productsRouter = require('./products')
const loginRouter = require('./login');
const { autentication } = require("../middleware");

router.use('/login', loginRouter)

router.use(autentication)
router.use('/kategoris', kategorisRouter)
router.use('/transaksis', transaksisRouter)
router.use('/products', productsRouter)


module.exports = router