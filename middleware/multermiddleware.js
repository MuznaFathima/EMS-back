// import mult


const multer=require('multer')
// to store uploading content into a file in server using multer

const storage=multer.diskStorage({

    destination:(req,file,callback)=>{
        callback(null,'./uploads')
    },
    filename:(req,file,callback)=>{
        let filename=`Image-${Date.now()}-${file.originalname}`
        callback(null,filename)
    }

})

const filefilter=(req,file,callback)=>{
    if(file.mimetype==="image/png"||file.mimetype==="image/jpg"||file.mimetype==="image/jpeg"){
        callback(null,true)
    }else{
        callback(null,false)
        return callback(new Error("only .png, .jpg, .jpeg files are allowed"))
    }
}

// so multerConfig variable have which type of file to be stored and where to store it. we know request from front end comes to router.js so we have to use this variable in router.js
const multerConfig=multer({
    storage,
    filefilter
})

module.exports=multerConfig