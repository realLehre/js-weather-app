// instantiate new storage
const storage = new Storage();
// get city name from Storage class
const cityName = storage.getLocalstorage().city;

// instantiate new weather
const weather = new Weather(cityName);

// instantiate new ui
const ui = new UI();

// display previous weather on page reload
window.addEventListener('DOMContentLoaded', showWeather);

// get change location input modal
const modal = document.getElementById('location-input');
const locationBtn = document.querySelector('.change-location');

locationBtn.addEventListener('click', () => {
    modal.classList.add('open');
})
// get input field
document.getElementById('city-form').addEventListener('submit', (e) => {
    const input = document.getElementById('city-form-input');

    weather.changeCity(input.value);

    // save location input text to local storage
    storage.saveToLocalstorage(input.value);

    // display weather in the web page/UI
    showWeather();

    input.value = '';

    modal.classList.remove('open');
    e.preventDefault()  
})


document.querySelector('.close-btn').addEventListener('click', () => {
    modal.classList.remove('open');
})

function showWeather() {
    weather.getWeather()
        .then(data => {
            ui.display(data)
        })
        .catch(err => console.log(err))
}


document.getElementById('ad-info-text').addEventListener('click', () => {
    document.querySelector('.infos').classList.toggle('show');
    document.querySelector('.fa-angle-up').classList.toggle('show');
})

let unit = localStorage.getItem('tempUnit'); 

const units = document.querySelectorAll('.temp-unit');

if(unit === 'switch'){
    units.forEach(unit => {
        unit.classList.add('switch');
    })
}

function switchTemp() {
    const switchBtn = document.querySelector('.switch-btn');

    switchBtn.addEventListener('click', () => {
        unit = localStorage.getItem('tempUnit');
         
              
        units.forEach(unit => {        
            if(!unit.classList.contains('switch')){
                unit.classList.add('switch');
                unit = localStorage.setItem('tempUnit', 'switch')
            } else {
                unit.classList.remove('switch');
                unit = localStorage.setItem('tempUnit', null)
            }
        })
    })
}

switchTemp();


