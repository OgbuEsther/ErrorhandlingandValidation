import mongoose from "mongoose"

const DB_URI = "mongodb://0.0.0.0:27017/validation"

const dbConfig = async():Promise<void> =>{
try {
    const connect = await mongoose.connect(DB_URI)
    console.log(`database connected to port ${connect.connection.host}`)
} catch (error) {
    console.log(`unable to connect to database beacause of ${error}`)
}
}


export default dbConfig