// import mongoose package

const mongoose=require('mongoose')


// asssign connection string to variable 

const connectionString=process.env.DATABASE

// connect
// when we connect mongoose and nodejs promise is returned. handle promise using .then and .catch

mongoose.connect(connectionString,{
    useUnifiedTopology: true,
    useNewUrlparser :true
}).then(()=>
{console.log("mongodb atlas connected to ems server")}

).catch((err)=>{
console.log("mongodb connection failed");
})

