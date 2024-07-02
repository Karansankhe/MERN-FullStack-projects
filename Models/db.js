import mongoose from 'mongoose';
import dotenv from "dotenv"

dotenv.config()

const DB_URL = process.env.DB_URL;

export const mongo =mongoose.connect(DB_URL)
.then(()=>{
console.log("connected")
}).catch((err) =>{
console.log("nconnected",err)
})