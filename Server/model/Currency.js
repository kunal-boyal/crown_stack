let mongoose = require("mongoose")
let Schema = mongoose.Schema

let currencySchema = new Schema(
    {
        name: {
            type: String,
            required: true
        },
        code: {
            type: String,
            required: true
        }
    }
)

let Currency = mongoose.model("currency", currencySchema)

module.exports = Currency