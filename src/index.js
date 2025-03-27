import dotenv from "dotenv";
// 1) Remove the custom path and let dotenv load the `.env` file automatically
dotenv.config();  
import connectDB from "./db/index.js";
connectDB();



 





/*
import express from "express"
( async()=>{
    try{
        await mongoose.connect(`${process.env.MONGODB_URI}/${DB_NAME}`)
        application.on("error",(error)=>{
            console.log("ERRR: ",error);
            throw error;
        })
        app.listen( process.env.PORT ,()=>{
            console.log(`App is listening on port ${process.env.PORT}`)
        })
    }
    catch(error){
        console.error("ERROR :",error)
        throw err
    }
})()
*/
