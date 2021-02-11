const express = require('express')
const cors = require('cors')

const dotenv = require('dotenv');
dotenv.config()

const PORT = process.env.PORT || 5000

require('./db')()
const currencyRoutes = require('./routes/currencyRoute')

const app = express()

app.use(cors())
app.use(express.urlencoded({ extended: false }))
app.use(express.json())

app.use(currencyRoutes)

//Dummy Route
app.get('/', (req, res) => {
    return res.json({ message: "Hello" })
})

app.listen(PORT, () => {
    console.log("Server Connected on port 5000")
})