import User from "../models/User.js";


export const userdetails = async(req,res)=>{
    try{
        const user =  await User.findById(req.user.id);
        console.log(user);
        res.status(201).json(user);
    }catch(err){
        console.error(err);
    }  
}