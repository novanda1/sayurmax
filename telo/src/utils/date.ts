const monthNames = [
  "January",
  "February",
  "March",
  "April",
  "May",
  "June",
  "July",
  "August",
  "September",
  "October",
  "November",
  "December",
];

export const formatDate = (d: string) => {
  const date = new Date(d);
  const formatedDate =
    date.getDay() +
    " " +
    monthNames[date.getMonth()] +
    " " +
    date.getFullYear() +
    " " +
    date.getHours() +
    ":" +
    date.getMinutes();

  return formatedDate;
};
