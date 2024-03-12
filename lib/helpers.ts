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
