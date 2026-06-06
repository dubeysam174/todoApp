 import express from 'express'
import { login, logout, register } from '../controllers/user.controller.js';


 const router = express.Router();

 // making an api endpoints... 
 router.route("/create").post(register)
 router.route("/").post(login)
 router.route("/logout").get(logout)


 export default router;