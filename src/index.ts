import express, { Express, Request, Response } from "express";
import mongoose from "mongoose";
import "dotenv/config";

const app: Express = express();
const port = process.env.PORT;

mongoose.connect(
  `mongodb+srv://${process.env.MONGODB_USERNAME}:${process.env.MONGODB_PASSWORD}@sales-cluster.z2l1u.mongodb.net/myFirstDatabase?retryWrites=true&w=majority`
);

const dbConnection = mongoose.connection;
dbConnection.on("error", (err) => console.log(`Connection error: ${err}`));
dbConnection.once("open", () => console.log("Connected to DB!"));

app.get("/", (req: Request, res: Response) => {
  res.send("Express + TypeScript Server");
});

app.listen(port, () => {
  console.log(`⚡️[server]: Server is running at http://localhost:${port}`);
});
