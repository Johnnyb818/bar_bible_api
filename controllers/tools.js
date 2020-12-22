const express = require('express')
const tools = express.Router()
const Tool = require("../models/tool.js")


// INDEX

tools.get("/", (req,res)=>{
    Tool.find({},(err,foundTool)=>{
        if(err) {
            res.status(400).json({error:err.message})
        }
        res.status(200).json(foundTool)
    })
})

// DELETE
tools.delete("/:id", (req,res)=>{
    Tool.findByIdAndRemove(req.params.id, (error, deletedTool)=>{
        if (error){
            res.status(400).json({error:error.message})
        }
        res.status(200).json(deletedTool)
    })
})

// UPDATE
tools.put("/:id", (req,res)=>{
    Tool.findByIdAndUpdate(req.params.id, req.body, {new:true}, (error, updatedTool)=>{
        if (error){
            res.status(400).json({error:error.message})
        }
        res.status(200).json(updatedTool)
    })
})


// CREATE
tools.post("/", (req,res)=>{
    Tool.create(req.body, (error, createdTool)=>{
        if (error){
            res.status(400).json({error:error.message})
        }
        res.status(200).json(createdTool)
    })
})

module.exports = tools