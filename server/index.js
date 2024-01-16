import express from 'express'
import cors from 'cors'
import dotenv from 'dotenv'

import mongoose, { Schema } from 'mongoose'

dotenv.config()
const app = express()
app.use(cors())
app.use(express.json())



const eduSchema=new Schema({
    image:{type:String,required:true},
    title:{type:String,required:true},
    description:{type:String,required:true},
},{timestamps:true})

const Edus=mongoose.model('Edu',eduSchema)


app.get('/edus',async (req, res) => {
    try {
        const  edus=await Edus.find({})
        res.send(edus)
    } catch (error) {
        res.status(500).json({ message: error })
    }

})

app.get('/edus/:id',async (req, res) => {
    try {
        const  edus=await Edus.findById(req,params,id)
        res.send(edus)
    } catch (error) {
        res.status(500).json({ message: error })
    }

})

app.post('/edus',async (req, res) => {
    try {
        const edu=new Edus({
        image:req.body.image,
        title:req.body.title,
        description:req.body.description,
    })
    await edu.save()
        res.send(edu)
    } catch (error) {
        res.status(500).json({ message: error })
    }

})

app.delete('/edus/:id',async (req, res) => {
    try {
        const names = await Names.findByIdAndDelete(req.params.id)
        res.status(500).json({ message: "Names Deleted" })
    } catch (error) {
        res.status(500).json({ message: error })
    }

})

const port = process.env.PORT
const url = process.env.URL.replace("<password>", process.env.PASSWORD)




mongoose.connect(url)
    .then(() => console.log("Connected db"))
    .catch(err => console.log("Db not connect" + err))
app.listen(port, () => {
    console.log("Server Connection")
})