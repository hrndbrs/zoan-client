import { Image } from "./image.type";
import { Products } from "./products.type";

export type Categories = {
  data: CategoryData[];
  meta: Meta;
};

export type Category = {
  data: CategoryData;
  meta: Meta;
};

export type CategoryData = {
  id: number;
  attributes: CategoryDataAttributes;
};

export type CategoryDataAttributes = {
  title: string;
  subTitle: string;
  createdAt: string;
  updatedAt: string;
  publishedAt: string;
  products: Products;
  icon?: string;
  image?: Image;
};

export type Meta = {};
