const express = require('express')
const syrups = express.Router()
const Syrup = require("../models/syrup.js")


// INDEX

syrups.get("/", (req,res)=>{
    Syrup.find({},(err,foundSyrup)=>{
        if(err) {
            res.status(400).json({error:err.message})
        }
        res.status(200).json(foundSyrup)
    })
})

// DELETE
syrups.delete("/:id", (req,res)=>{
    Syrup.findByIdAndRemove(req.params.id, (error, deletedSyrup)=>{
        if (error){
            res.status(400).json({error:error.message})
        }
        res.status(200).json(deletedSyrup)
    })
})

// UPDATE
syrups.put("/:id", (req,res)=>{
    Syrup.findByIdAndUpdate(req.params.id, req.body, {new:true}, (error, updatedSyrup)=>{
        if (error){
            res.status(400).json({error:error.message})
        }
        res.status(200).json(updatedSyrup)
    })
})


// CREATE
syrups.post("/", (req,res)=>{
    Syrup.create(req.body, (error, createdSyrup)=>{
        if (error){
            res.status(400).json({error:error.message})
        }
        res.status(200).json(createdSyrup)
    })
})

module.exports = syrups