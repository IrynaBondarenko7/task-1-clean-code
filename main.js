const christmas = {
  date: "2025-12-25",
  elementId: "my-element",
};

const newYear = {
  date: "2026-01-01",
  elementId: "my-element2",
};

function displayDaysUntilHoliday(holiday) {

  var daysUntilHoliday = countDaysUntilHoliday(holiday.date);

  var elementReference = document.getElementById(holiday.elementId);

  elementReference.innerText = daysUntilHoliday;
}

function countDaysUntilHoliday(date) {
  var todayDate = new Date();
  var holidayDate = new Date(date);

  return Math.round((holidayDate - todayDate) / (1000 * 60 * 60 * 24));
}

displayDaysUntilHoliday(christmas);
displayDaysUntilHoliday(newYear);
