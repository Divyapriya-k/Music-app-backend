import express from "express";
import dotenv from "dotenv";
import cors from "cors";
import dbConfig from "./Database/dbConfig.js";
import authRouter from "./Routers/appRouter.js";

dotenv.config();

const app = express();
app.use(express.json());
app.use(cors());

dbConfig();

app.use("/",(req,res)=>{
    res.send("welcome to the backend Musically");
})

app.use("/api/auth", authRouter);

const port = process.env.PORT||5000;

app.listen(port,  () => {
  console.log(`Server is running on port ${port}`);
});