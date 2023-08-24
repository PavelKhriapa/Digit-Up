// Madrid Footer
const madridFooter = document.getElementById('madrid-footer');
if (madridFooter !== null) {
  var deg = 6;
  var hour = document.querySelector("#madrid-footer .hour");
  var min = document.querySelector("#madrid-footer .min");
  var sec = document.querySelector("#madrid-footer .sec");

  var setClock = () => {
    // Получаем текущее время в часовом поясе Мадрида с помощью moment-timezone
    let day = moment().tz("Europe/Madrid");
    let hh = day.hours() * 30;
    let mm = day.minutes() * deg;
    let ss = day.seconds() * deg;

    hour.style.transform = `rotateZ(${hh + mm / 12}deg)`;
    min.style.transform = `rotateZ(${mm}deg)`;
    sec.style.transform = `rotateZ(${ss}deg)`;
  };

  // Первоначально устанавливаем время
  setClock();
  // Обновляем каждую секунду
  setInterval(setClock, 1000)
}
;

// Madrid 
const madrid = document.getElementById('madrid');
if (madrid !== null) {
  var deg1 = 6;
  var hour1 = document.querySelector("#madrid .hour");
  var min1 = document.querySelector("#madrid .min");
  var sec1 = document.querySelector("#madrid .sec");

  var setClock1 = () => {
    // Получаем текущее время в часовом поясе Мадрида с помощью moment-timezone
    let day1 = moment().tz("Europe/Madrid");
    let hh1 = day1.hours() * 30;
    let mm1 = day1.minutes() * deg1;
    let ss1 = day1.seconds() * deg1;

    hour1.style.transform = `rotateZ(${hh1 + mm1 / 12}deg)`;
    min1.style.transform = `rotateZ(${mm1}deg)`;
    sec1.style.transform = `rotateZ(${ss1}deg)`;
  };

  // Первоначально устанавливаем время
  setClock1();
  // Обновляем каждую секунду
  setInterval(setClock1, 1000);
}


// San Francisco
const sanFrancisco = document.getElementById('san-f');
if (madrid !== null) {
  var deg2 = 6;
  var hour2 = document.querySelector("#san-f .hour");
  var min2 = document.querySelector("#san-f .min");
  var sec2 = document.querySelector("#san-f .sec");

  var setClock2 = () => {
    // Получаем текущее время в часовом поясе Сан-Франциско с помощью moment-timezone
    let day2 = moment().tz("America/Los_Angeles"); // Используем часовой пояс Сан-Франциско
    let hh2 = day2.hours() * 30;
    let mm2 = day2.minutes() * deg2;
    let ss2 = day2.seconds() * deg2;

    hour2.style.transform = `rotateZ(${hh2 + mm2 / 12}deg)`;
    min2.style.transform = `rotateZ(${mm2}deg)`;
    sec2.style.transform = `rotateZ(${ss2}deg)`;
  };

  // Первоначально устанавливаем время
  setClock2();
  // Обновляем каждую секунду
  setInterval(setClock2, 1000);
}
