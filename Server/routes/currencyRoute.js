const express = require('express')
const router = express.Router()

const { addCurrency, getCurrencies } = require("../controllers/currencyController")

router.post("/addCurrency", addCurrency)
router.get("/getCurrencies", getCurrencies)


module.exports = router