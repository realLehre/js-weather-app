class Storage{
    constructor(city){
        this.city = city;
        this.default = 'Abuja';
    }

    getLocalstorage(){
        if(localStorage.getItem('city') == null){
            this.city = this.default;
        } else {
            localStorage.getItem('city');
        }

        return {
            city: this.city
        }
    }

    saveToLocalstorage(city){
        localStorage.setItem('city', city)
    }
}