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

const MongoUrl = process.env.mongourl;
const Port = process.env.port || 4000;

mongoose.connect(MongoUrl).then(() => {
    console.log("DB connected");
    app.listen(Port, () => {
        console.log(`server is running on port: ${Port}`);
    })

}).catch(error => console.log(error));

app.use("/", route); 