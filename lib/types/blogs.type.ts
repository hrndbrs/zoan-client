import { Image } from "./image.type";

export type Blogs = {
  data: BlogData[];
};

export type Blog = {
  data: BlogData;
};

export type BlogData = {
  id: number;
  attributes: BlogDataAttributes;
};

export type BlogDataAttributes = {
  title: string;
  content: string;
  createdAt: string;
  updatedAt: string;
  publishedAt: string;
  author?: string;
  banner: Image;
};
