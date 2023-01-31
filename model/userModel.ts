import mongoose, { mongo } from "mongoose";

import { userData } from "../AllInterfaces/modelInterfaces";

interface user extends userData ,mongoose.Document{}

const userSchema = new mongoose.Schema<userData>({
name : {
    type : String,
    required : [true , "please enter your name"],
    trim : true

},
email : {
    type : String,
    required :[true , "please enter a valid email"],
    trim : true,
    lowercase : true,
    unique : true
   

},
password : {
    type : String,
    required : [true , "please enter a password"],
    minlength : 6,

},
products : [{
    type : mongoose.Schema.Types.ObjectId,
    ref: "productColl",
}],
wishList : [
    {
        type : mongoose.Schema.Types.ObjectId,
        ref : "wishListColl"
    }
]
} , {timestamps : true})

const userModel = mongoose.model<user>("userColl" , userSchema)

export default userModel