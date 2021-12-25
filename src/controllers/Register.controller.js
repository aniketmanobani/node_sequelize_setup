import User from "../models/User.model.js"
import { validationResult } from "express-validator"
export const RegisterGET = (req,res) => {
    res.render('register',{title:"register"})

}


export const RegisterPOST = async(req,res) => {


    const error=validationResult(req)
    //console.log(error.mapped()['username'])


    if(!error.isEmpty()){
      return  res.render('register',{title:"login now",error:error.mapped(),printData:printData})
    }else{
        const {username,password}=req.body;
        try {
            const newUser=await User.create({username:username,password:password})
            const all=await User.findAll();

            
           return res.send(all)
        } catch (error) {
            console.log(error)
            res.render('register',{title:'register now',errorMessage:"User already exist"})
        }
        
    }
    res.render('register',{title:'register now'})
}

