import bodyParser from "body-parser";
import { Express } from "express";

export const applyBodyParser = (app: Express) => {
  // Body Parser must be before routes
  app.use(bodyParser.urlencoded({ extended: false }));
  app.use(bodyParser.json());
};
