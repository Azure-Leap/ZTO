import dotenv from "dotenv";
dotenv.config();
import express, {Application, Request, Response} from "express";

import connectDb from "./config";



const app: Application = express();
const PORT = process.env.PORT;
const dbUri = process.env.MONGO_URI || "";


app.use(express.json());

app.get("/", (req: Request, res: Response) => {
    res.send("Hello ZtO team");
  });

connectDb(dbUri);
app.listen(PORT, ()=>{
    console.log(`Server aslaa ${PORT}`);
})