import Conversation from "../models/conversation.model.js";
import Message from "../models/message.model.js";
import { getReceiverSocketId } from "../socket/socket.js";
import { io } from "../socket/socket.js"; 

export const sendMessage = async (req , res) => {
    // console.log("message sent", req.params.id);
    try {
        const {message} = req.body;
        const {id: receiverId} = req.params;
        const senderId = req.user._id;           // for usesrId we will need a middleware as we dont have this in the route (server.js)
        // console.log("req.user._id")

        let conversation = await Conversation.findOne({           // find if the conversation between the receiver and the sender exists
            participants:  {$all : [senderId, receiverId]},
        })

        if(!conversation){                      // if no conversation has taken place and this is the first conversation
            conversation = await Conversation.create({
                participants: [senderId, receiverId],
            })
        }          

        const newMessage = new Message({
            senderId,
            receiverId,
            message,
        })

        if(newMessage){
            conversation.messages.push(newMessage._id);
        }
        // await conversation.save();
        // await newMessage.save();       -> itr runs after the above has been completed

        // this will run in parallel
        await Promise.all([conversation.save(), newMessage.save()]);

        //SOCKET IO FUNCTIONALITY WILL GO HERE...
        const receiverSocketId = getReceiverSocketId(receiverId);
        if(receiverSocketId) {
            // io.to(<socket_id>).emit() is used to send events to specific clients
            io.to(receiverSocketId).emit("newMessage", newMessage)
        }

        res.status(201).json(newMessage);

    } catch (error) {
        console.log("Error in sendMessage controller", error.message);
        res.status(500).json({error : "Internal Server Error"});
    }
};

export const getMessages = async (req, res) => {
    try {

        const { id: userToChatId } = req.params;
        const senderId = req.user._id;
        
        const conversation = await Conversation.findOne({
            participants: {$all : [ senderId, userToChatId ]},
        }).populate("messages")                    // to get message id's -> this is not a reference but the actual messages
        console.log(conversation);

        if(!conversation) return res.status(200).json([]);


        const messages = conversation.messages;

        res.status(200).json(messages);
        
    } catch (error) {
        console.log("Error in sendMessage controller", error.message);
        res.status(500).json({error : "Internal Server Error"});
    }
}