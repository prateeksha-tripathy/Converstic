import jwt from "jsonwebtoken";
import User from "../models/user.model.js";
import mongoose from "mongoose";

const protectRoute = async (req, res, next) =>{
    try {
        const token = req.cookies.jwt;
        // console.log(token);

        if(!token){
            return res.status(401).json({error : "Unauthorized - No Token Provided"});
        }

        const decoded = jwt.verify(token, process.env.JWT_SECRET);
        // console.log(decoded);

        if(!decoded){
            return res.status(401).json({error : "Unauthorized - Invalid Token"});
        }

        const user = await User.findById(decoded.userId).select("-password");
        // console.log(decoded.userId);
        // console.log(user);

        // if(!user){
        //     return res.status(401).json({error : "User not found"});
        // }

        req.user = user;
        // console.log(req.user);
        // console.log(req.user._id instanceof mongoose.Types.ObjectId); // Check if req.user._id is an ObjectId


        next();

    } catch (error) {
        console.log("Error in protectRoute middleware: " + error.message);
        res.status(500).json({error : "Internal Server Error"});
    }
}

export default protectRoute;