const avatares = [
    {img: 'c1.png'},
    {img: 'c2.png'},
    {img: 'c3.png'},
    {img: 'c4.png'},
    {img: 'c5.png'},
]

let som = new Audio();
som.src = "https://www.soundjay.com/buttons/sounds/button-7.mp3";

const skinGrid = document.querySelector('.skin-grid');
avatares.forEach((avatar, index) => {
    const skinDiv = document.createElement('div');
    skinDiv.classList.add('skin');
    skinDiv.innerHTML = `<img src="./images/avatares/${avatar.img}">`;
    skinDiv.addEventListener('click', () => {
        som.play();
        sessionStorage.setItem('selectedSkin', avatar.img);
        som.onended = () => {
            window.location.href = 'nails.html';
        };
    });
    skinGrid.appendChild(skinDiv);
});