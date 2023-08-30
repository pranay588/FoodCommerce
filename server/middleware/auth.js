// const jwt = require('jsonwebtoken');
import jwt from "jsonwebtoken";
import dotenv from "dotenv";
dotenv.config();
// export const verifyToken = async(req,res,next)=>{
//     try{
//         let token = req.headers("Authorization");
//         if(!token){
//             return res.status(403).send("Access Denied");
//         }
//         if(token.startsWith("Bearer ")){
//             token = token.slice(7,token.lenght).trimLeft();
//         }
//         const verified = jwt.verify(token,process.env.JWT_SECRECT);
//         req.user = verified;
//         next();
//     }catch(err){
//         res.status(500).json({ error:err.message });
//     }
// }

export const verifyToken = async(req,res,next)=>{
    try{
        const authHead = req.headers['authorization'];
        if(!authHead)
            return res.status(403).send("Access Denied");
        
        let token = authHead.split(' ')[1];
        // console.log(token);
        jwt.verify(token,process.env.JWT_SECRET,(err,user)=>{
            if(err)
                return res.status(403).send("err");
            console.log(user);
            req.user = user;
            next();
        });
        
        

    }catch(err){
        res.status(500).json({ error:err.message });
    }
}

