class UI {
    constructor(){
        this.conditionText = document.querySelector('.condition-text');
        this.temperature = document.querySelector('.temp');
        this.icon = document.getElementById('temp-icon');
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
        this.latitude.innerHTML = `Lat: ${location.lat}`;
        this.location.innerHTML = `${location.name}, ${location.country}. <span id="lat">${this.latitude.innerHTML}</span>`;
        this.additionInfo.innerHTML = `
            <li class="info cloud">Cloud <span id="cloud-num">${current.cloud}</span></li>
            <li class="info uv">UV <span id="uv-num">${current.uv}</span></li>
            <li class="info humdity">Humidity <span id="humidity-num">${current.humidity}</span></li>
            <li class="info wind-degree">
                Wind Degree <span id="wind-degree-num">206</span>
            </li>
            <li class="info wind-speed">
                Wind Speed <span id="wind-speed-num">5.8<span>km/h</span></span>
            </li>
            <li class="info wind-dir">
                Wind Direction <span id="wind-dir-num">SSW</span>
            </li>
            <li class="info pressure">
                Pressure <span id="pressure-num">29.84 <span>in</span></span>
            </li>
        `;
    }
}

//# sourceMappingURL=index.a7a878f1.js.map
