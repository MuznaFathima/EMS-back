// router is for setting path for front end requests

// import express because we created server using express
// also import usercontroller

const express=require('express')
const usercontroller=require('../controllers/userController')

// using express create an object for router class

// imprt multerConfig
const multerConfig=require('../middleware/multermiddleware')
const router=new express.Router()

// before the request from front end going to addUser req by using profile as key we store it into uploads file 
router.post('/add',multerConfig.single("profile"),usercontroller.addUser)
router.get('/get/allusers',usercontroller.getallUsers)
router.delete('/delete/user/:id',usercontroller.deleteUser)
router.put('/edit/user/:id',multerConfig.single("profile"),usercontroller.editUser)
module.exports=router