class Storage{
    constructor(){
        this.city;
        this.default = 'Abuja';
        this.className = 'switch'
    }

    getLocalstorage(){
        if(localStorage.getItem('city') == null){
            this.city = this.default;
        } else {
            this.city = localStorage.getItem('city');
        }

        return {
            city: this.city
        }
    }

    saveToLocalstorage(city, className){
        localStorage.setItem('city', city);
    }
}