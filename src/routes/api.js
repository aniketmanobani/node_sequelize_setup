import express from 'express';

const api=express.Router();

api.get('/',(req,res)=>res.send("ok api"));



export default api;