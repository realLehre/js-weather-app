const weather = new Weather('Lagos');

const ui = new UI();

window.addEventListener('DOMContentLoaded', showWeather);

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

const modal = document.getElementById('location-input');
const locationBtn = document.querySelector('.change-location');

locationBtn.addEventListener('click', () => {
    modal.classList.add('open');
})


document.querySelector('.close-btn').addEventListener('click', () => {
    modal.classList.remove('open');
})

