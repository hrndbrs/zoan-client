export type Images = {
  data: ImageData[];
};

export type Image = {
  data: ImageData;
};

export type ImageData = {
  id: number;
  attributes: ImageDataAttributes;
};

export type ImageDataAttributes = {
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
