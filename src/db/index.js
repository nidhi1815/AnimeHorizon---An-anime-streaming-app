import mongoose from "mongoose";
import { DB_NAME } from "../constants.js";

const connectDB = async() =>{
    try{
        // console.log("MONGODB_URI =>", JSON.stringify(process.env.MONGODB_URI));

        const connectionInstance = await mongoose.connect(`${process.env.MONGODB_URI}/${DB_NAME}`)
        console.log(`\n MongoDB connected successfully!! DB HOST :${connectionInstance.connection.host} `);
    }
    catch(error){
        console.log("MONGODB connection failed",error.message);
        process.exit(1)
    }
}

export default connectDB;