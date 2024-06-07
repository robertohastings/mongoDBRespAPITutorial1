const mongoose = require("mongoose")

const DB_URI = "mongodb+srv://mainUser:uYuEfuYUULaAcu79@cluster0.dvxlhdy.mongodb.net/Heroes?retryWrites=true&w=majority&appName=Cluster0"

const connectDB = async () => {
    try {
        await mongoose.connect(DB_URI)
        console.log("Database connected")
    } catch (error) {
        console.log("Error while connecting " + error.message)
    }
}

module.exports = connectDB
