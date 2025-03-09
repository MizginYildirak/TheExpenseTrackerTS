export function getFormattedDate(date: any): string {
  if (!date) {
    console.error("getFormattedDate: date is undefined or null", date);
    return "";
  }

  const parsedDate = date instanceof Date ? date : new Date(date);

  if (isNaN(parsedDate.getTime())) {
    console.error("getFormattedDate: Invalid date", date);
    return "";
  }

  return parsedDate.toISOString().slice(0, 10);
}
