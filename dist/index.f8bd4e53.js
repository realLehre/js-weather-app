class Weather{constructor(t){this.city=t,this.key="bb7034c07f3a4831a76103340222303"}async getWeather(){const t=await fetch(`https://api.weatherapi.com/v1/forecast.json?key=${this.key}&q=${this.city}&days=2`);return await t.json()}changeCity(t){this.city=t}}
//# sourceMappingURL=index.f8bd4e53.js.map
