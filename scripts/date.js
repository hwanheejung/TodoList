// clock
const clock = document.querySelector('.clock');

function getClock(){
    const date = new Date();
    const hours = String(date.getHours()).padStart(2, "0");
    const minutes = String(date.getMinutes()).padStart(2, "0");
    const seconds = String(date.getSeconds()).padStart(2, "0");

    clock.innerHTML = `${hours}:${minutes}:${seconds}`;
}

getClock();
setInterval(getClock, 1000);


// date
const date_box = document.querySelector('.date-container');
const date = new Date();
const year = date.getFullYear(),
      month = date.getMonth() + 1,
      day = date.getDate();

date_box.innerText = `${year}년 ${month}월 ${day}일`;