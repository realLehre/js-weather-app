class Storage{
    constructor(){
        this.city;
        this.default = 'Abuja';
        this.className = 'switch'
    }

    // get local storage data
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

    // save weather location to local storage
    saveToLocalstorage(city, className){
        localStorage.setItem('city', city);
    }
}