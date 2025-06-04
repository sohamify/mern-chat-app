// backend/src/index.mjs
import dotenv from 'dotenv';
import cors from 'cors';
dotenv.config(); // Make sure this is at the very top!

import express from 'express';
import  connectDB  from './config/db.mjs';
import authRouter from './routes/auth.route.mjs';
import messageRouter from './routes/message.route.mjs';
import cookieParser from 'cookie-parser';

const app = express();
const port = process.env.PORT || 5000;

connectDB();

app.use(express.json());
app.use(cookieParser());
app.use(
  cors({
    origin: "http://localhost:5173",
    credentials: true,
  })
);

app.get('/', (req, res) => {
  res.send('API is running...');
});

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cookieParser());
app.use('/api/auth', authRouter);
app.use('/api/messages', messageRouter);


app.listen(port, () => console.log(`Server running on port ${port}`));