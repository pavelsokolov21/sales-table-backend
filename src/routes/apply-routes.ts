import { Express } from "express";
import { productsRouter } from "./products";

export const applyRoutes = (app: Express) => {
  app.use("/products", productsRouter);
};
