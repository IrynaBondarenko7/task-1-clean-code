import { holidaysData } from "./data.js";

function displayTimeUntilHoliday(holiday) {
  var timeUntilHoliday = countTimeUntilHoliday(holiday.date);

  setTimeInnerText(timeUntilHoliday.days, holiday.daysId, 3);
  setTimeInnerText(timeUntilHoliday.hours, holiday.hoursId, 2);
  setTimeInnerText(timeUntilHoliday.minutes, holiday.minutesId, 2);

  renderSecondsCircle(timeUntilHoliday.seconds, holiday.secondsCircleId);
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

function setTimeInnerText(value, elementId, padLength) {
  const element = document.getElementById(elementId);
  element.innerText = value.toString().padStart(padLength, "0");
}

function renderSecondsCircle(seconds, secondsCircleId) {
  const circleElement = document.getElementById(secondsCircleId);
  circleElement.innerHTML = "";

  for (let i = 0; i < 60; i++) {
    const secondsElement = document.createElement("span");
    const angle = i * 6;

    secondsElement.innerText = i.toString().padStart(2, "0");
    secondsElement.style.transform = `rotate(${angle}deg) translate(270px)`;
    secondsElement.id = `seconds-${i}`;

    if (i === seconds) {
      secondsElement.classList.add("active");
    }
    circleElement.appendChild(secondsElement);
  }

  rotateCircle(seconds, circleElement);
}

function rotateCircle(seconds, element) {
  const rotation = -seconds * 6;
  element.style.transform = `rotate(${rotation}deg)`;
}

holidaysData.forEach((holiday) => {
  displayTimeUntilHoliday(holiday);
});

const updateBtn = document.getElementById("update-btn");

updateBtn.addEventListener("click", () => {
  holidaysData.forEach((holiday) => {
    displayTimeUntilHoliday(holiday);
  });
});
