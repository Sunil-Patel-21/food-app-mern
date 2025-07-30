import express from "express";
import cors from "cors";
import dotenv from "dotenv";
import { connectDB } from "./config/db.js";
import foodRouter from "./routes/foodRoute.js";
dotenv.config();

// app config
const app = express();
const port = process.env.PORT || 4000;

// middlewares
app.use(express.json());
app.use(cors());
// app.use(express.urlencoded({extended:true}));

// DB config
connectDB();

// api routes
app.use("/api/food",foodRouter);
app.use("/images",express.static("uploads")); // for serving images from uploads folder to frontend



app.get("/",(req,res)=>{
    res.status(200).send("API Working");
})

app.listen(port,()=>{
    console.log(`Listening to requests on ${port}`);
})