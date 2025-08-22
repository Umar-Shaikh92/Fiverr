import Message from "../Models/messageModal.js";
import Conversation from "../Models/conversationModel.js";
import createError from "../Utils/error.js";

export const createMessage = async (req, res, next) => {
  const newMessage = new Message({
    conversationId: req.body.conversationId,
    userId: req.userId,
    desc: req.body.desc,
  });
  try {
    const savedMessage = await newMessage.save();
    await Conversation.findOneAndUpdate(
      { id: req.body.conversationId },
      {
        $set: {
          readBySeller: req.isSeller,
          readByBuyer: !req.isSeller,
          lastMessage: req.body.desc,
        },
      },
      { new: true }
    );
  } catch (error) {
    next(error);
  }
};


// direct redirecting through gpt response
// export const createMessage = async (req, res, next) => {
//   const newMessage = new Message({
//     conversationId: req.body.conversationId,
//     userId: req.userId,
//     desc: req.body.desc,
//   });

//   try {
//     const savedMessage = await newMessage.save();

//     await Conversation.findOneAndUpdate(
//       { _id: req.body.conversationId }, // ✅ FIXED FIELD
//       {
//         $set: {
//           readBySeller: req.isSeller,
//           readByBuyer: !req.isSeller,
//           lastMessage: req.body.desc,
//         },
//       },
//       { new: true }
//     );

//     return res.status(201).json(savedMessage); // ✅ You forgot to send a response
//   } catch (error) {
//     console.error("Message creation error:", error); // ✅ helpful log
//     return res.status(500).json({ message: "Something went wrong" });
//   }
// };


export const getMessages = async (req, res, next) => {
  try {
    const message = await Message.find({ conversationId: req.params.id });
    res.status(200).send(message);
  } catch (error) {
    next(error);
  }
};
