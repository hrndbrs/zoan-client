import { Image } from "./image.type";

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
  createdAt: Date;
  updatedAt: Date;
  publishedAt: Date;
  products: Products;
  icon?: string;
  image?: Image;
};

export type Products = {
  data: ProductData[];
};

export type ProductData = {
  id: number;
  attributes: ProductDataAttributes;
};

export type ProductDataAttributes = {
  name: string;
  type: string;
  video: string;
  updatedAt: Date;
  publishedAt: Date;
  products: Products;
};

export type Meta = {};
