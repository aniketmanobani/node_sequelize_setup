import { validationResult } from "express-validator"
import { printData } from "../utils/helper.js"
export const LoginGET = (req,res) => {
    res.render('login',{title:'login now'})
}

export const LoginPOST = (req,res) => {
    const error=validationResult(req)
    //console.log(error.mapped()['username'])


    if(!error.isEmpty()){
      return  res.render('login',{title:"login now",error:error.mapped(),printData:printData})
    }else{
        const {username,password}=req.body
        
    }


    res.render('login',{title:"login now"})
    
}