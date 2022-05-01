import { Express } from "express";
import { applyBodyParser } from "./apply-body-parser";
import { applyCors } from "./apply-cors";

export const applyMiddlewares = (app: Express) => {
  applyCors(app);
  applyBodyParser(app);
};
