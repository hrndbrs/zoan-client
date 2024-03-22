import { CategoryData } from "./types/categories.type";

export function camelCaseToWords(s: string) {
  const result = s.replace(/([A-Z])/g, " $1");
  return result.charAt(0).toUpperCase() + result.slice(1);
}

export function formatDate(d: Date, options: Intl.DateTimeFormatOptions = {}) {
  return d.toLocaleDateString("id-ID", options);
}

export function formatCategoryList(c: CategoryData[]) {
  return c.map((category) => {
    const { title, subTitle, icon, image } = category.attributes;
    return {
      title,
      subTitle,
      icon,
      imageUrl: image?.data ? appendImageUrl(image.data.attributes.url) : "/images/placeholder.png",
    };
  });
}

export function decodeURL(url: string) {
  const decodedUrl = decodeURIComponent(url);
  return decodedUrl[0].toUpperCase() + decodedUrl.substring(1);
}

export function appendImageUrl(url?: string) {
  return `${process.env.BACKEND_BASE_URL}${url}`;
}
