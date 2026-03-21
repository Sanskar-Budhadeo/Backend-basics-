import mongoose from "mongoose";
import { DB_name } from "../constants.js";

const connectDB = async ()=>{
    try {
      const connectionInstance =  await mongoose.connect(`${process.env.MONGODB_URI}/${DB_name}`)
      console.log(`Mongodb Connetion Succesfull ${connectionInstance.connection.host}`)
    } catch (error) {
        console.log("MONGODB connection Failed", error)
        process.exit(1)
    }
}
export default connectDB