const handGrid = document.querySelector('.caixa-mao');
const handDiv = document.createElement('div');
handDiv.classList.add('skin');
handDiv.innerHTML = `<img src="./images/maos/${sessionStorage.getItem('selectedSkin')}">`;
handGrid.appendChild(handDiv);

let som = new Audio();
som.src = "https://www.soundjay.com/buttons/sounds/button-7.mp3";

const esmaltes = [
    {img: 'e1.png'},
    {img: 'e2.png'},
    {img: 'e3.png'},
    {img: 'e4.png'},
    {img: 'e5.png'},
    {img: 'e6.png'},
    {img: 'e7.png'},
    {img: 'e8.png'},
    {img: 'e9.png'},
    {img: 'e10.png'},
    {img: 'e11.png'},
    {img: 'e12.png'},
    {img: 'e13.png'},
]

const esmalteGrid = document.querySelector('.caixa-esmaltes');
esmaltes.forEach((esmalte, index) => { 
    const esmalteDiv = document.createElement('div');
    esmalteDiv.classList.add('esmalte');
    esmalteDiv.innerHTML = `<img src="./images/esmaltes/${esmalte.img}">`;
    esmalteDiv.addEventListener('click', () => {
        const nailGrid = document.querySelector('.caixa-unha');
        nailGrid.innerHTML = `<img src="./images/unhas/${esmalte.img}">`;
        sessionStorage.setItem('selectedNail', esmalte.img);
    });
    esmalteGrid.appendChild(esmalteDiv);
});

const btnNext = document.querySelector('.btn-next');
btnNext.addEventListener('click', () => {
    som.play();
    som.onended = () => {
        window.location.href = 'deco.html';
    };
});
