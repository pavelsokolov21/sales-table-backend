import dayjs from "dayjs";
import { Request, Response, Router } from "express";
import { Product } from "../../interfaces/product";
import { ProductModel, ProductSchema } from "../../models/product.model";

export const productsRouter = Router();

productsRouter.get("/get/all", async (_: Request, res: Response) => {
  const products = await ProductModel.find({});

  res.json(products);
});

interface CreateRequest extends Request {
  body: Product;
}
productsRouter.post("/create", async (req: CreateRequest, res: Response) => {
  const { body } = req;

  const productsCount = await ProductModel.count().exec();
  try {
    const newProduct = new ProductModel<ProductSchema>({
      ...body,
      trackingId: `#${productsCount + 1}`,
      date: dayjs().toString(),
    });
    await newProduct.save();

    res.json({ message: "Success" });
  } catch (err) {
    if (err instanceof Error) {
      res.json({ message: err.message });
    }
  }
});
