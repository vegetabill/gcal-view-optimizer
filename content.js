// Custom JS for Google Calendar
// This script runs on https://calendar.google.com

// This code was ported from GCalPlus Chrome Extension
// https://www.gcaltools.com/
// specifically adjustDay.js

function getBodyAttr(key) {
  const attrs = document.querySelector('body').attributes
  const node = attrs.getNamedItem(key)
  if (node) {
    return node.nodeValue;
  }
  return null;
}

function isMonthView(){
    if (window.location.href.includes('month') || getBodyAttr("data-viewkey") == "MONTH") {
        return true;
    } else return false;
}

function isCustomWeeks(){
    if (window.location.href.includes('customweek') || getBodyAttr("data-viewkey") == "CUSTOM_WEEKS") {
        return true;
    } else return false;
}

function isWeekView(){
    if (window.location.href.includes('week') || getBodyAttr("data-viewkey") == "WEEK") {
        return true;
    } else return false;
}

function isYearView(){
    if (window.location.href.includes('year') || getBodyAttr("data-viewkey") == "YEAR") {
        return true;
    } else return false;
}

function isDayView(){
    if (window.location.href.includes('day') || getBodyAttr("data-viewkey") == "DAY") {
        return true;
    } else return false;
}

if (isDayView() || isWeekView()) {
  const allSpansNodeList = document.querySelectorAll('span');
  const hourChild = Array.from(allSpansNodeList)
          .find((elem) => elem.textContent === "00:00" || elem.textContent === "12 AM")
  const hourRow = hourChild.parentElement;
  const rowHeight = hourRow.offsetHeight;
  const grid = hourRow.parentElement.parentElement.parentElement;

  grid.style.marginTop = `-${rowHeight * (7 - 0.25)}px`;
  console.debug(`overriding grid margin for custom view [marginTop = ${grid.style.marginTop}]`)
}