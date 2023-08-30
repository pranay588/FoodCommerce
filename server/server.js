import path from "path";
import { fileURLToPath } from "url";
import express from "express";
import mongoose from "mongoose";
import cors from "cors";
import dotenv from "dotenv";
// import authRoutes from "./routes/auth.js";
import { register } from "./controllers/auth.js";
import { login } from "./controllers/auth.js";
import { userdetails } from "./controllers/userdetails.js";
//middlewares
import { verifyToken } from "./middleware/auth.js";

dotenv.config();
const app = express();
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cors());



const PORT = 3001 || process.env.PORT;

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
console.log(__dirname)
app.use(express.static(path.join(__dirname,'build')));
app.get('/',function(req,res){
    res.sendFile(path.join(__dirname,'build','index.html'))
});

// Routes with files
app.post('/auth/register',register);
app.post('/auth/login',login);
app.get('/auth/posts',verifyToken,userdetails);

// Routes 
// app.use('/auth',authRoutes);

mongoose.connect(process.env.MONGO_URL,{
    useNewUrlParser: true,
    useUnifiedTopology: true,
}).then(()=>{
    app.listen(PORT, ()=> console.log(`server is listening on port ${PORT}`));
}).catch((err) => console.log(`${err} did not connect :(`));
