const hours = document.getElementById('horas');
const minutes = document.getElementById('minutos');
const seconds = document.getElementById('segundos');

const relogio = setInterval(function time() {
    let dateToday = new Date();
    let hr = dateToday.getHours();
    let min = dateToday.getMinutes();
    let sec = dateToday.getSeconds();

    if(hr < 10) hr = '0' + hr;
    if(min < 10) min = '0' + min;
    if(sec < 10) s = '0' + sec;

    hours.textContent = hr;
    minutes.textContent = min;
    seconds.textContent = sec;
})
