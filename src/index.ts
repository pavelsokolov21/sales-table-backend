import express, { Express } from "express";
import bodyParser from "body-parser";
import "dotenv/config";
import { applyRoutes } from "./routes";
import { connectToDB } from "./database/connect-to-db";
import { applyMiddlewares } from "./middlewares/apply-middlewares";

const app: Express = express();
const port = process.env.PORT;

connectToDB();
applyMiddlewares(app);
applyRoutes(app);

app.listen(port, () => {
  console.log(`⚡️[server]: Server is running at http://localhost:${port}`);
});
