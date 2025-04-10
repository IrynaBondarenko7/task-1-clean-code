import { holidaysData } from "./data.js";

function displayTimeUntilHoliday(holiday) {
  var timeUntilHoliday = countTimeUntilHoliday(holiday.date);

  var daysElementReference = document.getElementById(holiday.daysId);
  var hoursElementReference = document.getElementById(holiday.hoursId);
  var minutesElementReference = document.getElementById(holiday.minutesId);
  var secondsElementReference = document.getElementById(holiday.secondsId);

  daysElementReference.innerText = timeUntilHoliday.days;
  hoursElementReference.innerText = timeUntilHoliday.hours;
  minutesElementReference.innerText = timeUntilHoliday.minutes;
  secondsElementReference.innerText = timeUntilHoliday.seconds;
}

function countTimeUntilHoliday(date) {
  var todayDate = new Date();
  var holidayDate = new Date(date);
  var millisecondsInDay = 1000 * 60 * 60 * 24;
  var millisecondsInHour = 1000 * 60 * 60;
  var millisecondsInMinute = 1000 * 60;
  var millisecondsInSecond = 1000;

  var currentYear = todayDate.getFullYear();

  holidayDate.setFullYear(currentYear);

  if (todayDate > holidayDate) {
    holidayDate.setFullYear(currentYear + 1);
  }

  var remainingMilliseconds = holidayDate - todayDate;

  var days = Math.floor(remainingMilliseconds / millisecondsInDay);
  var hours = Math.floor(
    (remainingMilliseconds % millisecondsInDay) / millisecondsInHour
  );
  var minutes = Math.floor(
    (remainingMilliseconds % millisecondsInHour) / millisecondsInMinute
  );
  var seconds = Math.floor(
    (remainingMilliseconds % millisecondsInMinute) / millisecondsInSecond
  );

  return {
    days,
    hours,
    minutes,
    seconds,
  };
}

holidaysData.forEach((holiday) => {
  displayTimeUntilHoliday(holiday);
});
