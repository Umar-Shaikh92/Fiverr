// import dotenv from "dotenv";
// import mongoose from "mongoose";

// dotenv.config();

// export const connectDB = async () => {
//   try {
//     const con = await mongoose.connect(process.env.MONGO_URI);
//     console.log("Mongo DB is Connected ✅");
//   } catch (error) {
//     console.log("Error in connecting MongoDB🚫", error);
//   }
// };


import mongoose from "mongoose";

let isConnected = false; // track connection

export const connectDB = async () => {
  if (isConnected) {
    console.log("MongoDB already connected ✅");
    return;
  }

  try {
    const db = await mongoose.connect(process.env.MONGO_URI, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });
    isConnected = db.connections[0].readyState === 1;
    console.log("MongoDB Connected ✅");
  } catch (error) {
    console.error("MongoDB connection error 🚫", error);
    throw error;
  }
};
