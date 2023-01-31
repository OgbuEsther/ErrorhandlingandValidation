import mongoose from "mongoose";
// import morgan from "morgan"
import cors from "cors"
import express,{ Application } from "express";
import userRouter from "./router/user.routes";



const appConfig =(app: Application) =>{
app.use(express.json()).use(cors());
app.use("/api/auth" , userRouter)
}


export default appConfig