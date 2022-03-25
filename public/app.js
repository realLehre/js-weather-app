const weather = new Weather('Bayern Munich');

const ui = new UI();

window.addEventListener('DOMContentLoaded', showWeather);

const modal = document.getElementById('location-input');
const locationBtn = document.querySelector('.change-location');

locationBtn.addEventListener('click', () => {
    modal.classList.add('open');
})

document.getElementById('city-form').addEventListener('submit', (e) => {
    const input = document.getElementById('city-form-input');

    weather.changeCity(input.value);

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
}


document.getElementById('ad-info-text').addEventListener('click', () => {
    document.querySelector('.infos').classList.toggle('show');
    document.querySelector('.fa-angle-up').classList.toggle('show');
})



