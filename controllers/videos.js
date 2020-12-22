const express = require('express')
const videos = express.Router()
const Video = require("../models/video.js")


// INDEX

videos.get("/", (req,res)=>{
    Video.find({},(err,foundVideo)=>{
        if(err) {
            res.status(400).json({error:err.message})
        }
        res.status(200).json(foundVideo)
    })
})

// DELETE
videos.delete("/:id", (req,res)=>{
    Video.findByIdAndRemove(req.params.id, (error, deletedVideo)=>{
        if (error){
            res.status(400).json({error:error.message})
        }
        res.status(200).json(deletedVideo)
    })
})

// UPDATE
videos.put("/:id", (req,res)=>{
    Video.findByIdAndUpdate(req.params.id, req.body, {new:true}, (error, updatedVideo)=>{
        if (error){
            res.status(400).json({error:error.message})
        }
        res.status(200).json(updatedVideo)
    })
})


// CREATE
videos.post("/", (req,res)=>{
    Video.create(req.body, (error, createdVideo)=>{
        if (error){
            res.status(400).json({error:error.message})
        }
        res.status(200).json(createdVideo)
    })
})

module.exports = videos