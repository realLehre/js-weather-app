class Weather {
    constructor(city){
        this.city = city;
        this.key = 'bb7034c07f3a4831a76103340222303';
    }
    async getWeather() {
        const response = await fetch(`https://api.weatherapi.com/v1/forecast.json?key=${this.key}&q=${this.city}&days=2`);
        const responseData = await response.json();
        console.log(responseData);
        return responseData;
    }
    changeCity(city) {
        this.city = city;
    }
}

//# sourceMappingURL=index.1743431c.js.map
