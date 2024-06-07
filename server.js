const express = require("express")
const app = express()
const connectDB = require("./config/db")

connectDB()

app.use(express.json())

const userRoutes = require("./routes/heroRoute")

app.use("/", userRoutes)

//Welcome to index
app.get("/", (req, res) => {
    console.log(req)
    res.json({ msg: "API Server is Running..." })
})

app.listen(8081, console.log("Server started on port 8081"))
