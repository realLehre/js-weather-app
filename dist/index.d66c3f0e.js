document.getElementById('ad-info-text').addEventListener('click', ()=>{
    document.querySelector('.infos').classList.toggle('show');
    document.querySelector('.fa-angle-up').classList.toggle('show');
});
const modal = document.getElementById('location-input');
const locationBtn = document.querySelector('.change-location');
locationBtn.addEventListener('click', ()=>{
    modal.classList.add('open');
});
document.querySelector('.close-btn').addEventListener('click', ()=>{
    modal.classList.remove('open');
});

//# sourceMappingURL=index.d66c3f0e.js.map
