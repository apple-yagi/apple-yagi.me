const MONTH_ENGLISH_LIST = ["Jan", "Feb", "Mar", "Apr", "May", "June", "July", "Aug", "Sept", "Oct", "Nov", "Dec"];

export const getEnglishDate = (date: Date): string =>
  MONTH_ENGLISH_LIST[date.getMonth()] + " " + date.getDate() + ", " + date.getFullYear();
