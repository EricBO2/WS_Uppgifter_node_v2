import express from "express"
import response = require("express")
import http = require("http")

const app = express()

const port: number = 3000

app.get("/",(request,response)=>{
    response.send("Hello world")
})

app.listen(port,()=>{
    console.log(`Listen to port ${port}`)
})