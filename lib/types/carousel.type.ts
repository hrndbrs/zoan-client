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

export type Images = {
  data: Datum[];
};

export type Datum = {
  id: number;
  attributes: DatumAttributes;
};

export type DatumAttributes = {
  name: string;
  alternativeText: null;
  caption: null;
  width: number;
  height: number;
  hash: string;
  ext: string;
  mime: string;
  size: number;
  url: string;
  previewURL: null;
  provider: string;
  providerMetadata: null;
  createdAt: Date;
  updatedAt: Date;
};

export type Meta = {};
