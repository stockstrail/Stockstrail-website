export function slugify(text: string): string {
  if (!text) return "";
  return text
    .toString()
    .toLowerCase()
    .trim()
    .replace(/<[^>]+>/g, "") // remove any html tags
    .replace(/^[#\s*_-]+/, "") // remove leading hashes/markdown
    .replace(/^[0-9]+[.\s)]+/, "") // remove leading numbers like "1. " or "1) "
    .replace(/[^\w\s-]/g, "") // remove special characters
    .replace(/[\s_-]+/g, "-") // collapse spaces into hyphen
    .replace(/^-+|-+$/g, ""); // trim hyphens
}
