import User from "../models/user.model.js";

export const getUsersForSidebar = async (req,res) => {
    try {
        
        const loggedInUserId = req.user._id;

        const filteredUsers = await User.find( { _id : { $ne: loggedInUserId } }).select("-password");
        // find all users except for the logged in user (self)

        res.status(200).json(filteredUsers);

    } catch (error) {
        console.log("Error in GetUsersForSidebar",error.message);
        res.status(500).json({error : "Internal Server Error"});
    }
}