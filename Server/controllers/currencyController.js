const Currency = require("../model/Currency")

module.exports = {
    addCurrency: async (req, res) => {
        try {
            const currency = new Currency({ ...req.body})
            await currency.save()
            return res.status(200).json({ message: "success" })

        } catch (error) {
            return res.status(500).json({message:"Server Error" })
        }
    },
    getCurrencies: async (req, res) => {
        try {
            const currencies = await Currency.find({})
            return res.status(200).json({ message: "success", data:currencies})
        } catch (error) {
            return res.status(500).json({ message: "Server Error" })

        }
    }
}