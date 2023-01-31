import userModel from "../model/userModel";
import { Request , Response , NextFunction } from "express";
import { asyncHandler } from "../utils/asyncHandler";
import bcrypt from "bcrypt"
import { userData } from "../AllInterfaces/modelInterfaces";
import { AppError, HttpCodes } from "../utils/appError";


//register 
export const registerUser = asyncHandler(
    async(req:Request<{} ,{} ,userData> , res:Response , next:NextFunction):Promise<Response> =>{
        const {name , email , password , wishList , products} = req.body
        const salt = await bcrypt.genSalt(10)
        const hashedPassword = await bcrypt.hash(password , salt)

        const user = await userModel.create({
            name , email , password:hashedPassword , wishList , products
        })

        if(!user){
            next(
                new AppError({
                    message : "unable to sign up",
                    name : AppError.name,
                    isOperational : true,
                    httpcode : HttpCodes.BAD_REQUEST
                })
            )
        }

        return res.status(201).json(
            {
                message : "sign up successful",
                data : user
            }
        )


    }
)

export const LoginUser = asyncHandler(
    async(req:Request , res:Response , next: NextFunction):Promise<Response> =>{
        const {email , password} = req.body
        if(!email){
            next(
                new AppError({
                    message: "please input a valid email",
                    name : AppError.name,
                httpcode: HttpCodes.BAD_REQUEST
                })
            )
        }
        const user = await userModel.findOne({email})

        if(!user){
            next(
                new AppError({
                    message : "user not found",
                    name : AppError.name,
                    httpcode: HttpCodes.NOT_FOUND
                })
            )
        }

        const checkedPassword = await bcrypt.compare(user!.password , password ,)
        if(!checkedPassword){
            next(
                new AppError({
                    message : "please check your email or password",
                    name : AppError.name,
                    httpcode: HttpCodes.BAD_REQUEST
                })
            )
        }
return res.status(201).json({
    message : "login successful",
    data : user
})

    }
)

//get all

// export const getAllUsers = asyncHandler(
    
// )