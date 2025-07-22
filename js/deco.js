const handGrid = document.querySelector('.caixa-mao');
const handDiv = document.createElement('div');
handDiv.classList.add('skin');
handDiv.innerHTML = `<img src="./images/maos/${sessionStorage.getItem('selectedSkin')}">`;
handGrid.appendChild(handDiv);
const nailDiv = document.createElement('div');
nailDiv.classList.add('unha-escolhida');
nailDiv.innerHTML = `<img src="./images/unhas/${sessionStorage.getItem('selectedNail')}">`;
handGrid.appendChild(nailDiv);

let som = new Audio();
som.src = "https://www.soundjay.com/buttons/sounds/button-7.mp3";

const adesivos = [
    {img: 'a1.png'},
    {img: 'a2.png'},
    {img: 'a3.png'},
    {img: 'a4.png'},
    {img: 'a5.png'},
    {img: 'a6.png'},
    {img: 'a7.png'},
];

const adesivoGrid = document.querySelector('.caixa-adesivos');
adesivos.forEach((adesivo, index) => { 
    const adesivoDiv = document.createElement('div');
    adesivoDiv.classList.add('adesivo');
    adesivoDiv.innerHTML = `<img src="./images/decos/${adesivo.img}">`;
    adesivoDiv.addEventListener('click', () => {
        const decoDiv = document.querySelector('.adesivo-escolhido');
        decoDiv.innerHTML = `<img src="./images/adesivos/${adesivo.img}">`;
        sessionStorage.setItem('selectedDeco', adesivo.img);
    });
    adesivoGrid.appendChild(adesivoDiv);
});

const btnNext = document.querySelector('.btn-prox');
btnNext.addEventListener('click', () => {
    som.play();
    som.onended = () => {
        window.location.href = 'magazine.html';
    };
});
