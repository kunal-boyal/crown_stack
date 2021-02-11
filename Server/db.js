const mongoose = require('mongoose')

module.exports = async () => {
    try {
        await mongoose.connect('mongodb+srv://kunal:kunal123@cluster0.b6pao.mongodb.net/crownstack?retryWrites=true&w=majority', { useNewUrlParser: true, useUnifiedTopology: true, useCreateIndex: true })
        console.log("Database Connected")
    } catch (error) {
        console.log(error.message)
    }
}

// mongodb://localhost:27017/crownStack