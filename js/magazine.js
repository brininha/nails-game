const canvas = new fabric.Canvas('revista-canvas');

function addTitulo(texto) {
    const titulo = new fabric.Text(texto.toUpperCase(), {
        top: 20,
        fontSize: 20,
        fontWeight: 'bold',
        fill: '#d63384',
        fontFamily: 'Arial',
        charSpacing: 100
    });
    canvas.add(titulo);
    titulo.centerH();
    canvas.renderAll();
}

addTitulo('Unhas & Charme');

let imagemPele, imagemUnha, imagemAdesivo;

function tentarAgrupar() {
    if (imagemPele && imagemUnha && imagemAdesivo) {
        const grupo = new fabric.Group([imagemPele, imagemUnha, imagemAdesivo], {
            left: 50,
            top: 50
        });

        canvas.add(grupo);
        grupo.top = canvas.height - (grupo.height * grupo.scaleY);
        canvas.renderAll();
    }
}

fabric.Image.fromURL(`./images/maos/${sessionStorage.getItem('selectedSkin')}`, function(img) {
    img.set({
        left: 50,
        bottom: 0,
        scaleX: 0.3,
        scaleY: 0.3
    });
    imagemPele = img;
    tentarAgrupar();
});

fabric.Image.fromURL(`./images/unhas/${sessionStorage.getItem('selectedNail')}`, function(img) {
    img.set({
        left: 50,
        bottom: 0,
        scaleX: 0.3,
        scaleY: 0.3
    });
    imagemUnha = img;
    tentarAgrupar();
});

fabric.Image.fromURL(`./images/adesivos/${sessionStorage.getItem('selectedDeco')}`, function(img) {
    img.set({
        left: 50,
        bottom: 0,
        scaleX: 0.3,
        scaleY: 0.3
    });
    imagemAdesivo = img;
    tentarAgrupar();
});

fabric.Image.fromURL(`./images/esmaltes/${sessionStorage.getItem('selectedNail')}`,     function(img) {
    img.set({
        left: 0,
        top: 50,
        scaleX: 0.2,
        scaleY: 0.2,
    });
    canvas.add(img);
    img.top = canvas.height - (img.height * img.scaleY);
    canvas.renderAll();
});

const legenda = new fabric.Textbox(`O esmalte "${sessionStorage.getItem('selectedColor')}" é a nova febre entre as celebridades!`, {
    top: 50,
    width: 230,
    fontSize: 10,
    fill: '#333',
    textAlign: 'center',
    fontFamily: 'Times New Roman',
    charSpacing: 100,
});
canvas.add(legenda);
legenda.centerH();
canvas.renderAll();

document.getElementById('salvar').addEventListener('click', () => {
    const dataURL = canvas.toDataURL({
        format: 'png'
    });
    const link = document.createElement('a');
    link.href = dataURL;
    link.download = 'capa-revista.png';
    link.click();
});

const capas = [
    {img: 'c1.jpg'},
    {img: 'c2.jpg'},
    {img: 'c3.jpg'},
    {img: 'c4.jpg'},
    {img: 'c5.jpg'},
];

const caixaBgs = document.querySelector('.caixa-bgs');
capas.forEach((capa, index) => {
    const capaDiv = document.createElement('div');
    capaDiv.classList.add('capa'); 
    capaDiv.innerHTML = `<img src="./images/capas/${capa.img}">`;
    capaDiv.addEventListener('click', () => {
        const bgImage = new fabric.Image.fromURL(`./images/capas/${capa.img}`, function(img) {
            img.set({
                left: 0,
                top: 0,
                scaleX: canvas.width / img.width,
                scaleY: canvas.height / img.height
            });
            canvas.setBackgroundImage(img, canvas.renderAll.bind(canvas));
        });
    });
    caixaBgs.appendChild(capaDiv);
});