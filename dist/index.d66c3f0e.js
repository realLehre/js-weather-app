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
locationBtn.addEventListener('click', ()=>{
    modal.classList.add('open');
});
// get input field
document.getElementById('city-form').addEventListener('submit', (e)=>{
    const input = document.getElementById('city-form-input');
    weather.changeCity(input.value);
    // save location input text to local storage
    storage.saveToLocalstorage(input.value);
    // display weather in the web page/UI
    showWeather();
    input.value = '';
    modal.classList.remove('open');
    e.preventDefault();
});
// get btn to close location modal 
document.querySelector('.close-btn').addEventListener('click', ()=>{
    modal.classList.remove('open');
});
// show weather info in the web UI
function showWeather() {
    weather.getWeather().then((data)=>{
        ui.display(data);
    }).catch((err)=>console.log(err)
    );
}
// show additional weather information
document.getElementById('ad-info-text').addEventListener('click', ()=>{
    document.querySelector('.infos').classList.toggle('show');
    document.querySelector('.fa-angle-up').classList.toggle('show');
}) // // add unit change to local storage
 // let savedUnit = localStorage.getItem('tempUnit'); 
 // if(savedUnit === 'switch'){
 //     units.forEach(unit => {
 //         unit.classList.add('switch');
 //     })
 // }
 // // get btn for switching temperature unit
 // document.querySelector('.switch-btn').addEventListener('click', () => {
 //     console.log(1)
 //     savedUnit = localStorage.getItem('tempUnit');
 //     units.forEach(unit => {        
 //         if(!unit.classList.contains('switch')){
 //             unit.classList.add('switch');
 //             savedUnit = localStorage.setItem('tempUnit', 'switch')
 //         } else {
 //             unit.classList.remove('switch');
 //             savedUnit = localStorage.setItem('tempUnit', null)
 //         }
 //     })
 // });
;

//# sourceMappingURL=index.d66c3f0e.js.map
