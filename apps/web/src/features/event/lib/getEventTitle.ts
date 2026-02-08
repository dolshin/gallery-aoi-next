export function getEventTitle(
  categoryName?: string,
  year?: string,
  month?: string,
) {
  return year && month
    ? `${year}年${month}月`
    : year && !month
      ? `${year}年`
      : categoryName
        ? `${categoryName}`
        : '';
}
