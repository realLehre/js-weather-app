class Storage{constructor(){this.city,this.default="Abuja"}getLocalstorage(){return null==localStorage.getItem("city")?this.city=this.default:this.city=localStorage.getItem("city"),{city:this.city}}saveToLocalstorage(t){localStorage.setItem("city",t)}}
//# sourceMappingURL=index.e196b656.js.map
