const hourEL = document.querySelector('.hour');
const minEL = document.querySelector('.min');
const secEL = document.querySelector('.sec');

const showTime = function () {
  const now = new Date();
  let hour = now.getHours();
  let min = now.getMinutes();
  let sec = now.getSeconds();

  hour = String(hour).padStart(2, 0);
  min = String(min).padStart(2, 0);
  sec = String(sec).padStart(2, 0);

  hourEL.textContent = hour;
  minEL.textContent = min;
  secEL.textContent = sec;
};

setInterval(showTime, 1000);
