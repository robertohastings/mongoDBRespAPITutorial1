const express = require("express")
const Hero = require("../models/heroModel")

const router = express.Router()

//Display all superheroes
router.get("/superheroes", async (req, res) => {
    try {
        const heros = await Hero.find({})
        res.json(heros)
    } catch (error) {
        console.log(error)
    }
})
//Display superhero by id
router.get("/superheroes/:superHeroId", async (req, res) => {
    try {
        const hero = await Hero.findById(req.params.superHeroId)
        res.json(hero)
    } catch (error) {
        console.log(error)
    }
})
//Create superhero
router.post("/superheroes", async (req, res) => {
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
router.put("/superheroes/:superHeroId", async (req, res) => {
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
router.delete("/superheroes/:superHeroId", async (req, res) => {
    try {
        await Hero.findByIdAndDelete(req.params.superHeroId)
        res.json({ msg: "Superhero deleted" })
    } catch (error) {
        console.log(error)
    }
})

module.exports = router
