class Weather {
    constructor(city){
        this.city = city;
        this.key = config.forMe;
    }
    // get weather data from API
    async getWeather() {
        const response = await fetch(`https://api.weatherapi.com/v1/forecast.json?key=${this.key}&q=${this.city}&days=2`);
        const responseData = await response.json();
        return responseData;
    }
    // change city location
    changeCity(city) {
        this.city = city;
    }
}

//# sourceMappingURL=index.1743431c.js.map
