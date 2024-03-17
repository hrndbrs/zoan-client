import { Data as CategoriesResponseType } from "./types/categories.type";
export function camelCaseToWords(s: string) {
  const result = s.replace(/([A-Z])/g, " $1");
  return result.charAt(0).toUpperCase() + result.slice(1);
}

export function deslugify(s: string) {
  const result = s.replaceAll("-", " ");
  return result.charAt(0).toUpperCase() + result.slice(1);
}

export function formatDate(d: Date, options: Intl.DateTimeFormatOptions = {}) {
  return d.toLocaleDateString("id-ID", options);
}

export function formatCategoryList(c: CategoriesResponseType[]) {
  return c.map((category) => {
    const { title, subTitle, icon, image } = category.attributes;
    return {
      title,
      subTitle,
      icon,
      imageUrl: `${process.env.NEXT_APP_IMAGE_URL}${image?.data.attributes.url}`,
    };
  });
}
