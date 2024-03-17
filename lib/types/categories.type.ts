import { Image } from "./image.type";

export type Categories = {
  data: Data[];
  meta: Meta;
};

export type Data = {
  id: number;
  attributes: DataAttributes;
};

export type DataAttributes = {
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
  data: Datum[];
};

export type Datum = {};

export type Meta = {};
