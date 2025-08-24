import express from "express";
import type { Request, Response } from "express";
import http = require("http");
import { Db, MongoClient, ServerApiVersion } from "mongodb";
import { validateSecret } from "../security/validateEnv.js";
import "dotenv/config";

const app = express();

const port: number = 3000;
let userName: string

const uri: string | undefined = validateSecret(
  process.env.DB_CONNECTION_STRING
);
const dbName: string | undefined = validateSecret(process.env.DB_NAME);

const client = new MongoClient(uri, {
  serverApi: {
    version: ServerApiVersion.v1,
    strict: true,
    deprecationErrors: true,
  },
});
let isConnected = false;

app.get("/", (request, response) => {
  response.send("Hello world!!!!!!!!");
});

app.get("/:id", (req: Request, res: Response) => {
  const id: number = Number(req.params.id); // CASTING
  if (isNaN(id)) {
    res.status(400).send("Not a number");
  }
  res.send({ id: id })
});

app.get("/set/username/:username",(req: Request,res:Response)=>{
    const username: string|undefined = req.params.username
    if(!username){
        res.status(400).send("Not valid user name")
    }
    else{
        userName = username
        res.status(201).send(`username set to ${userName}`)
    }
})                                                              //mitt försök på en endpoint vet inte ifall det är vad du tänkte men jag tyckte det va roligt
app.get("/set/username",(req: Request,res:Response)=>{                  
    res.send(userName)
})

app.listen(port, "0.0.0.0", () => {
  console.log(`Listening to port ${port}`);
  console.log(`Start the app: http://localhost:${port}`);
});
