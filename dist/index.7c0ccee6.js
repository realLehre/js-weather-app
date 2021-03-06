const storage = new Storage();
const cityName = storage.getLocalstorage().city;
const weather = new Weather(cityName);
const ui = new UI();
window.addEventListener('DOMContentLoaded', showWeather);
const modal = document.getElementById('location-input');
const locationBtn = document.querySelector('.change-location');
locationBtn.addEventListener('click', ()=>{
    modal.classList.add('open');
});
document.getElementById('city-form').addEventListener('submit', (e)=>{
    const input = document.getElementById('city-form-input');
    weather.changeCity(input.value);
    storage.saveToLocalstorage(input.value);
    showWeather();
    input.value = '';
    modal.classList.remove('open');
    e.preventDefault();
});
document.querySelector('.close-btn').addEventListener('click', ()=>{
    modal.classList.remove('open');
});
function showWeather() {
    weather.getWeather().then((data)=>{
        ui.display(data);
    }).catch((err)=>console.log(err)
    );
}
document.getElementById('ad-info-text').addEventListener('click', ()=>{
    document.querySelector('.infos').classList.toggle('show');
    document.querySelector('.fa-angle-up').classList.toggle('show');
});
// date
const dateToday = document.getElementById('date-today');
const days = [
    'Sun',
    'Mon',
    'Tue',
    'Wed',
    'Thur',
    'Fri',
    'Sat'
];
const todayDay = new Date().getDay();
const dayName = days[todayDay];
const todayDate = new Date().getDate();
const months = [
    'Jan',
    'Feb',
    'Mar',
    'Apr',
    'May',
    'Jun',
    'Jul',
    'Aug',
    'Sept',
    'Oct',
    'Nov',
    'Dec'
];
const todayMonth = new Date().getMonth();
const monthName = months[todayMonth];
dateToday.innerHTML = `<p id="date-today">${dayName}, ${todayDate} ${monthName}</p>`;

//# sourceMappingURL=index.7c0ccee6.js.map
