import express from 'express';
import Homepage from '../controllers/Homepage.controller.js';
import { LoginGET, LoginPOST } from '../controllers/Login.controller.js';
import {RegisterGET,RegisterPOST} from '../controllers/Register.controller.js';
import LoginSchema from '../validationSchema/LoginSchema.js';

const web=express.Router();

web.get('/',Homepage);

web.get('/login',LoginGET);
web.post('/login',LoginSchema,LoginPOST);

web.get('/register',RegisterGET);
web.post('/register',LoginSchema,RegisterPOST);

web.get('/dashboard',(req,res)=>res.send("ok"));



export default web;