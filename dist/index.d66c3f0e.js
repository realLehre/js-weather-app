async function getWeather() {
    const response = await fetch('http://api.weatherapi.com/v1/forecast.json?key=bb7034c07f3a4831a76103340222303&q=Lagos');
    const data = await response.json();
    console.log(data);
}
getWeather().then((data)=>data
);

//# sourceMappingURL=index.d66c3f0e.js.map
