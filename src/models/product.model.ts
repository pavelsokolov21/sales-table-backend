import { Dayjs } from "dayjs";
import { Schema, model } from "mongoose";
import { Collections } from "../enums/collections.enum";
import { Product } from "../interfaces/product";

export interface ProductSchema extends Product {
  trackingId: string;
  date: string;
}

const productSchema = new Schema<ProductSchema>({
  trackingId: { type: String, required: true },
  name: { type: String, required: true },
  image: { type: String, required: true },
  customer: { type: String, required: true },
  amount: { type: Number, required: true },
  paymentMode: { type: String, required: true },
  status: { type: String, required: true },
  date: { type: String, required: true },
});

export const ProductModel = model<ProductSchema>(
  Collections.PRODUCTS,
  productSchema
);
