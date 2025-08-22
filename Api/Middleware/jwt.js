import jwt from "jsonwebtoken";
import User from "../Models/userModel.js";
import createError from "../Utils/error.js";

export const verifyToken = (req, res, next) => {
  const token = req.cookies.accessToken;
  if (!token) return next(createError(401, "You are not authenticated!"));
  // res.status(401).send("You are not authenticated!");

  jwt.verify(token, process.env.JWT_KEY, async (err, payload) => {
    if (err) return next(createError(403, "Token is not valid anymore!"));
    // res.status(403).send("Token is not valid anymore!");
    req.userId = payload.id;
    req.isSeller = payload.isSeller;
    next();
  });
};
