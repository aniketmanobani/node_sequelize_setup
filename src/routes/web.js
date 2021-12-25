import express from 'express';
import Home from '../controllers/Home.controller.js';
import Homepage from '../controllers/Homepage.controller.js';
import { LoginGET, LoginPOST } from '../controllers/Login.controller.js';
import {RegisterGET,RegisterPOST} from '../controllers/Register.controller.js';
import NormalAuth from '../middlewares/NormalAuthMiddleware.js';
import LoginSchema from '../validationSchema/LoginSchema.js';

const web=express.Router();

web.get('/',Homepage);

web.get('/login',LoginGET);
web.post('/login',LoginSchema,LoginPOST);

web.get('/register',RegisterGET);
web.post('/register',LoginSchema,RegisterPOST);


// protected routes
web.get('/home',NormalAuth,Home);
web.get('/logout',NormalAuth,(req,res)=>{req.session=null; res.redirect("/login")});



export default web;