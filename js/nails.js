const handGrid = document.querySelector('.caixa-mao');
const handDiv = document.createElement('div');
handDiv.classList.add('skin');
handDiv.innerHTML = `<img src="./images/maos/${sessionStorage.getItem('selectedSkin')}">`;
handGrid.appendChild(handDiv);

let som = new Audio();
som.src = "https://www.soundjay.com/buttons/sounds/button-7.mp3";

const esmaltes = [
    {img: 'e1.png', nome: 'Noite estrelada'},
    {img: 'e2.png', nome: 'Café com leite'},
    {img: 'e3.png', nome: 'Algodão doce'},
    {img: 'e4.png', nome: 'Maçã do amor'},
    {img: 'e5.png', nome: 'Fusca azul'},
    {img: 'e6.png', nome: 'Abacate'},
    {img: 'e7.png', nome: 'Fúria da noite'},
    {img: 'e8.png', nome: 'Xote da alegria'},
    {img: 'e9.png', nome: 'Coração indomável'},
    {img: 'e10.png', nome: 'Magia de unicórnio'},
    {img: 'e11.png', nome: 'Sapatinhos de rubi'},
    {img: 'e12.png', nome: 'Jerimum'},
    {img: 'e13.png', nome: 'Cisne negro'},
    {img: 'e14.png', nome: 'Nevou'},
]

const esmalteGrid = document.querySelector('.caixa-esmaltes');
esmaltes.forEach((esmalte, index) => { 
    const esmalteDiv = document.createElement('div');
    esmalteDiv.classList.add('esmalte');
    esmalteDiv.innerHTML = `<img src="./images/esmaltes/${esmalte.img}">`;
    esmalteDiv.addEventListener('click', () => {
        const nailDiv = document.querySelector('.unha-escolhida');
        nailDiv.innerHTML = `<img src="./images/unhas/${esmalte.img}">`;
        sessionStorage.setItem('selectedNail', esmalte.img);
        sessionStorage.setItem('selectedColor', esmalte.nome);
    });
    esmalteGrid.appendChild(esmalteDiv);
});

const btnNext = document.querySelector('.btn-prox');
btnNext.addEventListener('click', () => {
    som.play();
    som.onended = () => {
        window.location.href = 'deco.html';
    };
});
