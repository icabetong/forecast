import dateFormat from "dateformat";

export function formatAsDate(n: number) {
  const date = new Date(n * 1000)
  return dateFormat(date, "dddd, mmmm dS, yyyy, h:MM:ss TT");
}

export function formatKelvin(degK: number) {
  return Math.round(degK - 273.15);
}