// const bcrypt = require('bcrypt');
// const jwt = require('jsonwebtoken');
// const User = require('../models/User.js');
import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";
import User from "../models/User.js";
import dotenv from "dotenv";
dotenv.config();

//Register User
export const register = async(req,res)=>{
    try{
        const{
            firstName,
            lastName,
            email,
            password,
            products
        } = req.body;

        const passwordHash = await bcrypt.hash(password,10);

        const newUser = new User({
            firstName,
            lastName,
            email,
            password: passwordHash,
            products            
        });
        const savedUser = await newUser.save();
        res.status(201).json(savedUser);
    }catch(err){
        res.status(500).json({ error: err.message });
    }
};

//loggin in 
export const login = async(req,res)=>{
    try{
        const { email , password} = req.body;
        const user = await User.findOne({ email:email });
        if(!user)
            return res.status(400).json({ msg:"User does not exist. "})

        const isMatch = await bcrypt.compare(password,user.password);
        if(!isMatch)
            return res.status(400).json({ msg:"Invalid credentials. "}) 
        const token = jwt.sign({ id: user._id },process.env.JWT_SECRET);
        delete user.password;
        res.status(200).json({ token:token });
        
    }catch(err){
        res.status(500).json({ error: err.message });
    }
}

