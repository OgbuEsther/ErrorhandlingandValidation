import { Router } from "express";
import { LoginUser, registerUser } from "../controller/user.controls";


const userRouter = Router()


userRouter.route("/signup").post(registerUser)
userRouter.route("/signin").post(LoginUser)



export default userRouter