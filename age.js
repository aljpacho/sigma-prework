function ageDate(date) {
  var date1 = new Date(date);
  var date2 = Date.parse(Date());

  var timeDiff = Math.abs(date2 - date1);
  var dayDiff = Math.ceil(timeDiff / (1000 * 60 * 60 * 24));
  var yearDiff = Math.ceil(dayDiff / 365);

  console.log(yearDiff + " years");
}

ageDate("2000-07-21");
