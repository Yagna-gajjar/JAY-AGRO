import express from "express";
import mongoose from "mongoose";
import bodyParser from "body-parser";
import dotenv from "dotenv";
import cors from "cors";
import route from "./routes/userRoute.js";

const app = express();
app.use(bodyParser.urlencoded({ extended: false }))
app.use(bodyParser.json())
app.use(cors());
dotenv.config();

const port = process.env.port;
const mongodburl = process.env.mongostring;

mongoose.connect(mongodburl).then(() => {

    console.log("DB connected");

    app.listen(5000, () => {
        console.log(`server is running on port: ${port}`);
    })

}).catch(error => console.log(error));
app.use("/api", route); 