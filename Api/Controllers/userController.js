import User from "../Models/userModel.js";
import createError from "../Utils/error.js";

export const deleteUser = async (req, res, next) => {
  const user = await User.findById(req.params.id);

  if (req.userId !== user._id.toString()) {
    return next(createError(403, "You are not authorized to delete this user!"));
  }
  await User.findByIdAndDelete(req.params.id);
  res.status(200).send("User Deleted Successfully");
};


export const getUser = async (req, res, next) => {
  const user = await User.findById(req.params.id);
  res.status(200).send(user);
};

// import User from "../Models/userModel.js";
// import jwt from "jsonwebtoken";

// export const deleteUser = async (req, res) => {
//   try {
//     const token = req.cookies.accessToken;
//     if (!token) return res.status(401).send("You are not authenticated!");

//     jwt.verify(token, process.env.JWT_KEY, async (err, payload) => {
//       if (err) return res.status(403).send("Token is invalid!");

//       const user = await User.findById(req.params.id);
//       if (!user) return res.status(404).send("User not found!");

//       if (payload.id !== user._id.toString()) {
//         return res.status(403).send("You are not authorized to delete this user!");
//       }

//       await User.findByIdAndDelete(req.params.id);
//       res.status(200).send("User Deleted Successfully");
//     });
//   } catch (error) {
//     res.status(500).send("Server error: " + error.message);
//   }
// };
