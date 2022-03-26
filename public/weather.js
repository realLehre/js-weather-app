class Weather{
    constructor(city){
        this.city = city;
        this.key = 'bb7034c07f3a4831a76103340222303';
    }

    // get weather data from API
    async getWeather(){
        const response = await fetch(`https://api.weatherapi.com/v1/forecast.json?key=${this.key}&q=${this.city}&days=2`);

        const responseData = await response.json();

        return responseData;
    }

    // change city location
    changeCity(city){
        this.city = city;
    }
}