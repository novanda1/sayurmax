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
    const withoutTz = d.split(".")[0];
    const datetime = withoutTz.split(" ");
    const date = datetime[0];
    const time = datetime[1];
    const monthName = monthNames[+date.split("-")[1] - 1];
    const ddmmyyArr = date.replace(date.split("-")[1], monthName).split("-");
    const ddmmyy = ddmmyyArr.reverse().join(" ");

    return ddmmyy + " " + time;
};
