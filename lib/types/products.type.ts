import { Image, Images } from "./image.type";
import { Metadata } from "./metadata.type";

export type Products = {
  data: ProductData[];
};

export type Product = {
  data: ProductData;
};

export type ProductData = {
  id: number;
  attributes: ProductDataAttributes;
};

export type ProductDataAttributes = {
  name: string;
  type: string;
  video?: string;
  createdAt: string;
  updatedAt: string;
  publishedAt: string;
  description: string;
  banner?: Image;
  images?: Images;
  supportedOperatingSystem?: SupportedOS[];
  specification?: Specification;
  tagline?: TagLine;
  file?: FileType;
  seo: Metadata;
};

type FileType = {
  data: FileTypeData;
};

type FileTypeData = {
  id: number;
  attributes: FileTypeDataAttributes;
};

type FileTypeDataAttributes = {
  url: string;
};

export type SupportedOS = {
  id: number;
  name: string;
  type: OSType[];
};

export type OSType = {
  id: number;
  type: string;
};

export type TagLine = {
  id: string;
  title: string;
  description: string;
  children: TagLineChildren[];
};

export type TagLineChildren = {
  id: number;
  value: string;
};

export type Specification = {
  id: number;
  data: SpecificationData[];
};

export type SpecificationData = {
  id: number;
  key: string;
  value: string;
};
