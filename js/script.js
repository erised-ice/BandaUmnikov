var timer = function () {
  var hoursLeft = document.querySelector(".js-timer-hours");
  var hoursText = document.querySelector(".js-timer-hours-text");
  var minutesLeft = document.querySelector(".js-timer-minutes");
  var minutesText = document.querySelector(".js-timer-minutes-text");
  var secondsLeft = document.querySelector(".js-timer-seconds");
  var secondsText = document.querySelector(".js-timer-seconds-text");
  var dateNow = new Date().getTime();
  var finishDate = new Date(dateNow + 10 * 3600 * 1000);
  var timeTextFormat = function(value) {
    return value < 10 ? "0" + value : value;
  };
  var declensionOfNumber = function(number, titles) {
    return titles[
        number % 10 === 1 && number % 100 !== 11
            ? 0
            : number % 10 >= 2 &&
            number % 10 <= 4 &&
            (number % 100 < 10 || number % 100 >= 20)
            ? 1
            : 2
        ];
  };

  setInterval(function() {
    var currentDate = new Date().getTime();
    var leftTimeInSeconds = Math.floor((finishDate - currentDate) / 1000);
    var secondsToMinutes = leftTimeInSeconds % 3600;
    var hoursNumber = Math.floor(leftTimeInSeconds / 3600);
    var minutesNumber = Math.floor(secondsToMinutes / 60);
    var secondsNumber = secondsToMinutes % 60;

    hoursLeft.innerHTML = timeTextFormat(hoursNumber);
    minutesLeft.innerHTML = timeTextFormat(minutesNumber);
    secondsLeft.innerHTML = timeTextFormat(secondsNumber);
    hoursText.innerHTML = declensionOfNumber(hoursNumber, [
      "час",
      "часа",
      "часов"
    ]);
    minutesText.innerHTML = declensionOfNumber(minutesNumber, [
      "минута",
      "минуты",
      "минут"
    ]);
    secondsText.innerHTML = declensionOfNumber(secondsNumber, [
      "секунда",
      "секунды",
      "секунд"
    ]);
  });
}

var priceNewHtml = document.querySelector('.js-price-new');
var priceOldHtml = document.querySelector('.js-price-old');
var priceNew = 9999;
var priceOld = 9999;

var priceFormat = function (price) {
  return new Intl.NumberFormat('ru-RU').format(price);
};

priceNewHtml.innerHTML = priceFormat(priceNew);
priceOldHtml.innerHTML = priceFormat(priceOld);

timer();
