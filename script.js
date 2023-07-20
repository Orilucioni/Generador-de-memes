const urlMeme =  document.getElementById('url-input');
const imageMeme = document.getElementById('image-meme');
const brightInput = document.getElementById('brightness-input');
const opacityInput = document.getElementById('opacity-input');
const contrastInput = document.getElementById('contrast-input');
const blurInput = document.getElementById('blur-input');
const grayScaleInput = document.getElementById('gray-scale-input');
const sepiaInput = document.getElementById('sepia-input');
const hueRotationInput = document.getElementById('hue-rotation-input');
const saturationInput = document.getElementById('saturation-input');
const invertInput = document.getElementById('invert-input');
const modoOscuro = document.getElementById('modo-oscuro');
const header = document.getElementsByClassName('header-modo-oscuro');
const main = document.getElementsByClassName('main-modo-oscuro');
const section = document.getElementsByClassName('section-modo-oscuro');
console.log (section)




urlMeme.addEventListener ('input', (e)=>insertarImagen(e));
brightInput.addEventListener('input', ()=> filtros());
opacityInput.addEventListener('input', ()=> filtros());
blurInput.addEventListener('input', ()=> filtros());
grayScaleInput.addEventListener('input', ()=> filtros());
sepiaInput.addEventListener('input', ()=> filtros());
hueRotationInput.addEventListener('input', ()=> filtros());
saturationInput.addEventListener('input', ()=> filtros());
contrastInput.addEventListener('input', ()=> filtros());
modoOscuro.addEventListener ('click', (e)=>oscurecer(e))

const  insertarImagen = (e) => {
    imageMeme.style.backgroundImage = `url('${e.target.value}')`
}

const filtros = () => {
    imageMeme.style.filter = `brightness (${brightInput.value}) opacity(${opacityInput.value}) blur(${blurInput.value}px) contrast(${contrastInput.value}%) grayscale(${grayScaleInput.value}%) hue-rotate(${hueRotationInput.value}deg) sepia(${sepiaInput.value}%) saturate(${saturationInput.value}%) invert(${invertInput.value})`
}

const oscurecer = (e) => {
    header[0].classList.add ("modo-oscuro")
    main[0].classList.add ("modo-oscuro")
    section[0].classList.add ("modo-oscuro")
}




