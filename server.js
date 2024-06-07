const express = require("express")
const app = express()
const connectDB = require("./config/db")
const Hero = require("./models/heroModel")

connectDB()

app.use(express.json())

//Display all superheroes
app.get("/superheroes", async (req, res) => {
    try {
        const heros = await Hero.find({})
        res.json(heros)
    } catch (error) {
        console.log(error)
    }
})
//Display superhero by id
app.get("/superheroes/:superHeroId", async (req, res) => {
    try {
        const hero = await Hero.findById(req.params.superHeroId)
        res.json(hero)
    } catch (error) {
        console.log(error)
    }
})
//Create superhero
app.post("/superheroes", async (req, res) => {
    try {
        await Hero.create({
            superheroname: req.body.superheroname,
            name: req.body.name
        })
        res.json({ msg: "Superhero Created" })
    } catch (error) {
        console.log(error)
    }
})
//Edit superhero with id
app.put("/superheroes/:superHeroId", async (req, res) => {
    try {
        await Hero.findByIdAndUpdate(req.params.superHeroId, {
            superheroname: req.body.superheroname,
            name: req.body.name
        })
        res.json({ msg: "Hero is updated" })
    } catch (error) {
        console.log(error)
    }
})

//Delete superhero by id
app.delete("/superheroes/:superHeroId", async (req, res) => {
    try {
        await Hero.findByIdAndDelete(req.params.superHeroId)
        res.json({ msg: "Superhero deleted" })
    } catch (error) {
        console.log(error)
    }
})

//Welcome to index
app.get("/", (req, res) => {
    console.log(req)
    res.json({ msg: "API Server is Running..." })
})

app.listen(8081, console.log("Server started on port 8081"))
