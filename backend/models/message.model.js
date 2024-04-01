import mongoose from "mongoose";

const messageSchema = new mongoose.Schema(
    {
        senderId : {
            type : mongoose.Schema.Types.ObjectId,
            ref : "User",
            required : true,
        },
        receiverId : {
            type : mongoose.Schema.Types.ObjectId,
            ref : "User",
            required : true,
        },
        message : {
            type : String,
            required : true,
        },
        // createdAt , updatedAt fields are automatically created by mongoose due to the second parameter timestamp. This field works as : 
        //createdAt , updatedAt => message.createdAt : 15:30 -> it means it shows the timing of the conversations.
    }, {timestamps: true});

const Message = mongoose.model("Message", messageSchema);

export default Message;