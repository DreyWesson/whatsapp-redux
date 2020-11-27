function formatDate(date, formatType) {
  var hours = date.getHours(),
    minutes = date.getMinutes(),
    weekDay = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"],
    monthName = [
      "Jan",
      "Feb",
      "Mar",
      "Apr",
      "May",
      "Jun",
      "Jul",
      "Aug",
      "Sep",
      "Oct",
      "Nov",
      "Dec",
    ],
    ampm = hours >= 12 ? "pm" : "am",
    strTime,
    day,
    month;
  hours = hours % 12;
  hours = hours ? hours : 12; // the hour '0' should be '12'
  minutes = minutes < 10 ? "0" + minutes : minutes;
  strTime = hours + ":" + minutes + " " + ampm;
  day = weekDay[date.getDay()];
  month = monthName[date.getMonth()];

  // if the date is TODAY display only time else displat DAY,DATE
  let isToday = () => {
    switch (formatType) {
      case "time&date":
        // 6:28 pm 11/14/2020
        return `${strTime} ${
          date.getMonth() + 1
        }/${date.getDate()}/${date.getFullYear()}`;
      case "isToday":
        // 6:28 pm • Today
        return `${strTime} • Today`;
      case "checkIfToday":
        return `${date.getDate()}•${month}•${date.getFullYear()}`;
      default:
        // Sat 14 Nov, 2020
        return `${day} ${date.getDate()} ${month}, ${date.getFullYear()}`;
    }
  };
  return isToday();
}
export default formatDate;
