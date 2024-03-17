import { Images } from "./image.type";

export type Carousel = {
  data: Data;
  meta: Meta;
};

export type Data = {
  id: number;
  attributes: DataAttributes;
};

export type DataAttributes = {
  createdAt: Date;
  updatedAt: Date;
  publishedAt: Date;
  images: Images;
};

export type Meta = {};
