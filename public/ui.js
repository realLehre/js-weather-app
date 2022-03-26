class UI{
    constructor(){
        this.conditionText = document.querySelector('.condition-text');
        this.temperature = document.querySelector('.temp');
        this.icon = document.getElementById('temp-icon');
        this.localTime = document.getElementById('local-time-time');
        this.latitude = document.getElementById('lat');
        this.location = document.querySelector('.location-name');
        this.additionInfo = document.querySelector('.infos');
        this.morrowWeather = document.querySelector('.morrow-weather');
    }

    display(data) {
        const current = data.current;
        const location = data.location;

        this.conditionText.textContent = data.current.condition.text;

        this.temperature.innerHTML = `${current.temp_c} <span>o <span>C</span></span>`;

        this.icon.setAttribute('src', data.current.condition.icon);

        this.localTime.textContent = location.localtime;

        this.latitude.innerHTML = `Lat: ${location.lat}`;

        this.location.innerHTML = `${location.name}, ${location.country}. <span id="lat">${this.latitude.innerHTML}</span>`;

        this.additionInfo.innerHTML = `
            <li class="info cloud">Cloud <span id="cloud-num">${current.cloud}</span></li>
            <li class="info uv">UV <span id="uv-num">${current.uv}</span></li>
            <li class="info humdity">Humidity <span id="humidity-num">${current.humidity}</span></li>
            <li class="info wind-degree">
                Wind Degree <span id="wind-degree-num">${current.wind_degree}</span>
            </li>
            <li class="info wind-speed">
                Wind Speed <span id="wind-speed-num">${current.wind_kph} <span>km/h</span></span>
            </li>
            <li class="info wind-dir">
                Wind Direction <span id="wind-dir-num">${current.wind_dir}</span>
            </li>
            <li class="info pressure">
                Pressure <span id="pressure-num">${current.pressure_in} <span>in</span></span>
            </li>
        `

        const forecast = data.forecast.forecastday[1].hour;

        let output = '';
        forecast.forEach((hour, index) => {
            const time = new Date(hour.time).getHours();
            let realTime = `0${time}:00`;
            if(time >= 10){
                realTime = `${time}:00` 
            }

            output += `
                <span class="weather">
                <p class="time">${realTime}</p>
                <div class="weather-img">
                    <img src=${hour.condition.icon} alt="" />
                </div>
                <div class="temp">
                    ${hour.temp_c} <span>o <span>C</span></span>
                </div>
                </span>
            `
        })

        this.morrowWeather.innerHTML = output;
    }
}