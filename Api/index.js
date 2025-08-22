import express from 'express';
import { connectDB } from './ConnectDB/connectDB.js';
import conversationRoute from './Routes/conversationRoute.js';
import messageRoute from './Routes/messageRoute.js';
import orderRoute from './Routes/orderRoute.js';
import gigRoute from './Routes/gigRoute.js';
import reviewRoute from './Routes/reviewRoute.js';
import userRoute from './Routes/userRoute.js';
import authRoute from './Routes/authRoute.js'
import cookieParser from 'cookie-parser';
import cors from 'cors';

const app = express();
const PORT = process.env.PORT || 3000;

app.use(cors({ origin: "http://localhost:5173", credentials: true }));
app.use(express.json());
app.use(cookieParser());
app.use('/api/auth', authRoute);
app.use('/api/users', userRoute)
app.use('/api/gigs', gigRoute);
app.use('/api/reviews', reviewRoute);
app.use('/api/orders', orderRoute);
app.use('/api/conversation', conversationRoute);
app.use('/api/message', messageRoute);


app.use((err, req, res, next) => {
 const errorStatus =  err.status = err.status || 500;
 const errorMessage = err.message = err.message || 'Something Went Wrong!';

 return res.status(errorStatus).send(errorMessage)
});


app.listen(PORT, () => {
  connectDB();
  console.log("OK From Backend 😉");
});

