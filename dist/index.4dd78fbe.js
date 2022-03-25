class Storage {
    constructor(){
        this.city;
        this.default = 'Abuja';
    }
    getLocalstorage() {
        if (localStorage.getItem('city') == null) this.city = this.default;
        else this.city = localStorage.getItem('city');
        return {
            city: this.city
        };
    }
    saveToLocalstorage(city) {
        localStorage.setItem('city', city);
    }
}

//# sourceMappingURL=index.4dd78fbe.js.map
