import express, { Application } from "express"
import appConfig from "./app"
import dbConfig from "./config/db"
const port : number = 4000


const server:Application = express()
appConfig(server)
dbConfig()


server.listen(port , ()=>{
    console.log(`server is up on port ${port}`)
})