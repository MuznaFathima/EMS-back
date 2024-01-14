
// import dotenv
require('dotenv').config()
// import mongoDB  connection 
require('./DB-connection/connection')
// -import express
const express=require('express')
// import router
const router=require('./Router/router')
// impoert cors
const cors=require('cors')
// create server using express
const emsserver=express()
// using cors in server app
emsserver.use(cors())

// parse json data using server app

emsserver.use(express.json())
// using router in server app
emsserver.use(router)
// express have a method called static to get the uploading content stored in server
emsserver.use('/uploads',express.static('./uploads'))

// customize port for server

const PORT=4000 ||process.env.PORT

// to run server use app.listen

emsserver.listen(PORT,()=>{
    console.log(`ems server started at port: ${PORT}`);

})

// to resolve request. just to check if serever responds

// emsserver.post('/',(req,res)=>
// res.send(`<h1>ems server started at port 4000</h1>`))

