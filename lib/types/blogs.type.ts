import { Image } from "./image.type";

export type Blogs = {
  data: BlogData[];
  meta: Meta;
};

export type Blog = {
  data: BlogData;
  meta: Meta;
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

export type Meta = {
  pagination: Pagination;
};

export type Pagination = {
  page: number;
  pageSize: number;
  pageCount: number;
  total: number;
};
