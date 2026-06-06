import { User } from "../models/user.model.js";
import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";
import cookieParser from "cookie-parser";

export const register = async (req, res) => {
  try {
    const { name, email, password } = req.body; // password ->safsgsgfefsdfshjjfj

    //applying check here ...
    if (!name || !email || !password) {
      return res.status(403).json({
        success: false,
        message: "all fields are requied",
      });
    }

    // finding user id with email if already there throw error...
    const user = await User.findOne({ email });
    if (user) {
      return res.status(403).json({
        success: false,
        message: "This email id is already presented in db",
      });
    }

    // making password hashed so stored in cypher form...
    const hashedPassword = await bcrypt.hash(password, 10);
    await User.create({
      name,
      email,
      password: hashedPassword,
    });

    return res.status(201).json({
      success: true,
      message: "a/c created successfully",
    });
  } catch (error) {
    console.log("error orccured during register function", error);
  }
};

// getting or writing login controller....

export const login = async (req, res) => {
  try {
    const { email, password } = req.body;

    // applying check here...
    if (!email || !password) {
      return res.status(403).json({
        success: false,
        message: "all fields are required",
      });
    }

    const user = await User.findOne({ email });
    if (!user) {
      return res.status(403).json({
        success: false,
        message: "incorrect email or password",
      });
    }

    const isPasswordMatch = await bcrypt.compare(password, user.password); // gives boolean value...

    if (!isPasswordMatch) {
      return res.status(403).json({
        success: false,
        message: "incorrect email or password",
      });
    }

    const token = await jwt.sign({ userId: user._id }, process.env.SECRET_KEY, {
      expiresIn: "1d",
    });

    return res
      .status(200)
      .cookie("token", token, {
        httpOnly: true,
        sameSite: "strict",
        maxAge: 24 * 60 * 60 * 1000,
      })
      .json({
        success: true,
        message: `welcome back ${user.name}`,
      });
  } catch (error) {
    console.log("error in login", error);
  }
};

export const logout= async(req,res)=>{
    try {
        return res.status(200).cookie('token',"",{maxAge:0}).json({
            success:true,
            message:"user logout successfully"
        })
    } catch (error) {
        console.log(error)
    }
}
