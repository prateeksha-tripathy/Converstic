import express from "express";
import { getMessages , sendMessage } from "../controllers/message.controller.js";
import protectRoute from "../middleware/protectRoute.js";

const router = express.Router();

router.get("/:id", protectRoute ,getMessages);  
router.post("/send/:id", protectRoute ,sendMessage)                       
// protectRoute : before sending message , protect this route. not all the users in the databse can send messages but only those that pass this function

export default router;