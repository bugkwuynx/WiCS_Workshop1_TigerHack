import express from "express";
import dotenv from "dotenv";
import cors from "cors";
import mongoose from 'mongoose';
import bookRoutes from "./routes/book.route.js";

dotenv.config();

const app = express();
const port = process.env.PORT || 3000;

app.use(express.json());
app.use(cors());

// Connect to MongoDB

// Connect to routes


app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
})
