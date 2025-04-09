const holidaysData = [
  {
    date: "2025-12-25",
    elementId: "my-element",
  },
  {
    date: "2026-01-01",
    elementId: "my-element2",
  },
  {
    date: "2025-02-14",
    elementId: "my-element3",
  },
];

function displayDaysUntilHoliday(holiday) {
  var daysUntilHoliday = countDaysUntilHoliday(holiday.date);

  var elementReference = document.getElementById(holiday.elementId);

  elementReference.innerText = daysUntilHoliday;
}

function countDaysUntilHoliday(date) {
  var todayDate = new Date();
  var holidayDate = new Date(date);
  var millisecondsInDay = 1000 * 60 * 60 * 24;

  if (checkIfHolidayDateInPast(todayDate, holidayDate)) {
    holidayDate = fixOldDateToFutureDate(holidayDate);
  }
  return Math.round((holidayDate - todayDate) / millisecondsInDay);
}

function checkIfHolidayDateInPast(todayDate, holidayDate) {
  return new Date(todayDate) > new Date(holidayDate);
}

function fixOldDateToFutureDate(oldHolidayDate) {
  return oldHolidayDate.setFullYear(oldHolidayDate.getFullYear() + 1);
}

holidaysData.forEach((holiday) => {
  displayDaysUntilHoliday(holiday);
});
