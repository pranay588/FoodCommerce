// const express = require('express');
// const {login} = require('../controllers/auth.js');
import express from "express";
import { login } from "../controllers/auth.js";

const router = express.Router();

router.post('/login',login);

// module.export = router;
export default router;