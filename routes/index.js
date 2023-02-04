const { Router } = require("express");
const router = Router()

const kategorisRouter = require('./kategoris')
const transaksisRouter = require('./transaksis')
const productsRouter = require('./products')

router.use('/kategoris', kategorisRouter)

router.use('/transaksis', transaksisRouter)

router.use('/products', productsRouter)

module.exports = router