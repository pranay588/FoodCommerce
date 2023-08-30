// const mongoose = require('mongoose');
import mongoose from "mongoose";

const userSchema = new mongoose.Schema(
    {
        firstName: {
            type: String,
            required: true,
            min: 2,
            max: 50,
        },
        lastName: {
            type: String,
            required: true,
            min: 2,
            max: 50,
        },
        email: {
            type: String,
            required: true,
            unique: true,
            max: 50,
        },
        password:{
            type: String,
            required: true,
            min: 5,
        },
        products: {
            type: Array,
            default: [],
        }
    },{
        timestamps:true
    }
    );

    const User = mongoose.model("User",userSchema);
    export default User;