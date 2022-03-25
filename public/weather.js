class Weather{
    constructor(city){
        this.city = city;
        this.key = 'bb7034c07f3a4831a76103340222303';
    }

    async getWeather(){
        const response = await fetch(`http://api.weatherapi.com/v1/forecast.json?key=${this.key}=${this.city}&days=1`);
    }
}