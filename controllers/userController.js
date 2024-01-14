

// controllers is for comtrolling front end request to userSchema

const { response } = require('express');
const users=require('../Modals/userSchema')

// suppose adduser is a request coming from front end to store data according to our schema, req is where requests come and res where response stored.

exports.addUser=async (req,res)=>{
    console.log('inside add user');

    const{fname,lname,email,mobile,gender,status,location}=req.body
   try{
    const preuser=await users.findOne({email})
    if(preuser){
        res.status(406).json("user already exists!")
    }
    else{
        const newUser=new users({
            fname,lname,email,mobile,gender,status,profile:req.file.filename,location
        })
        await newUser.save()
        res.status(200).json(newUser)
    }

   }catch(err){
    res.status(401).json("Error: "+err)
   }
}
exports.getallUsers=async(req,res)=>{

    const search=req.query.search
    const  query={
        fname:{$regex:search,$options:"i"}
    }
    try{
        const allusers=await users.find(query)
        res.status(200).json(allusers)
    }
    catch(err){
        res.status(401).json(err)
    }
}

exports.deleteUser=async(req,res)=>{
    const {id}=req.params
    try{
        const removeData=await users.findByIdAndDelete({_id:id})
        res.status(200).json(removeData)
    }catch(err){
        res.status(401).json(err)
    }
}

exports.editUser=async(req,res)=>{
    const{id}=req.params
    const{fname,lname,email,mobile,gender,status,location,profile}=req.body
    const file=req.file?req.file.filename:profile
    try{
        const updateUser=await users.findByIdAndUpdate({_id:id},{
            fname,lname,email,mobile,gender,status,profile:file,location
        },{new:true})
        await updateUser.save()
        res.status(200).json(updateUser)

    }catch(err){
        res.status(401).json(err)
    }

}


// if req has an uploading content we have to store it in backend system physically. then it is stored  as url in mongoDB. for that create folder uploads

// multer: library for handling uploading files in node.js
// whether its photo,video or any file by using multer we can store it physically in backend

// so before uploading files reach in req we have to get them in upload files and store them ohysically there. then only we can turn them to url and store in mongoDB
// findByIdAndDelete    => find id  in mongoose (mongoDB)  then delete
// findByidAndUpdate to edit

// to check if there is string in node=>regular expression concept
// RegExp:is a sequence of charachters that forms a search pattern
// modifier i: perform case sensitive matching to avoid capital/small letter confusion while searching



