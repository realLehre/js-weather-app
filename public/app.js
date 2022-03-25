async function getWeather() {
    // const response = await fetch('http://api.weatherapi.com/v1/forecast.json?key=bb7034c07f3a4831a76103340222303&q=Ife&days=5');

    const data = await response.json();

    console.log(data);
}

getWeather()
    .then(data => data)

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

