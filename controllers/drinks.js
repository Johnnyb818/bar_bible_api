const express = require('express')
const drinks = express.Router()
const Drink = require("../models/drink.js")


// INDEX

drinks.get("/", (req,res)=>{
    Drink.find({},(err,foundDrink)=>{
        if(err) {
            res.status(400).json({error:err.message})
        }
        res.status(200).json(foundDrink)
    })
})

// DELETE
drinks.delete("/:id", (req,res)=>{
    Drink.findByIdAndRemove(req.params.id, (error, deletedDrink)=>{
        if (error){
            res.status(400).json({error:error.message})
        }
        res.status(200).json(deletedDrink)
    })
})

// UPDATE
drinks.put("/:id", (req,res)=>{
    Drink.findByIdAndUpdate(req.params.id, req.body, {new:true}, (error, updatedDrink)=>{
        if (error){
            res.status(400).json({error:error.message})
        }
        res.status(200).json(updatedDrink)
    })
})


// CREATE
drinks.post("/", (req,res)=>{
    Drink.create(req.body, (error, createdDrink)=>{
        if (error){
            res.status(400).json({error:error.message})
        }
        res.status(200).json(createdDrink)
    })
})

module.exports = drinks