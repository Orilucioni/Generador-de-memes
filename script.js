const buttonIconX = document.getElementById('button-icon-x')
const urlMeme =  document.getElementById('url-input');
const inputColor = document.getElementById('input-color');
const colorName = document.getElementById ('color-Name');
const selectImage = document.getElementById('select-image-fondo');
const brightInput = document.getElementById('brightness-input');
const opacityInput = document.getElementById('opacity-input');
const contrastInput = document.getElementById('contrast-input');
const blurInput = document.getElementById('blur-input');
const grayScaleInput = document.getElementById('gray-scale-input');
const sepiaInput = document.getElementById('sepia-input');
const hueRotationInput = document.getElementById('hue-rotation-input');
const saturationInput = document.getElementById('saturation-input');
const invertInput = document.getElementById('invert-input');
const buttonMode = document.getElementById('button-mode');
const header = document.getElementById('container-header');
const main = document.getElementById('container-main');
const imageMeme = document.getElementById('image-meme');
const downloadButton = document.getElementById("download-button");
const meme = document.getElementById("meme-container");
const asideText = document.getElementById('aside-text');
const asideImage = document.getElementById('aside-image');
const buttonText = document.getElementById('button-text');
const buttonImage = document.getElementById('button-image')
const inputColorText = document.getElementById('input-color-text');
const inputColorFondo = document.getElementById('input-color-fondo');
const topText = document.getElementById('top-text');
const bottomText = document.getElementById('bottom-text');
const textareaTopText = document.getElementById('textarea-top-text');
const textareaBottomText = document.getElementById('textarea-bottom-text');
const checkboxBottomText = document.getElementById('checkbox-bottom-text');
const checkboxTopText = document.getElementById('checkbox-top-text')
const checkboxTransparent = document.getElementById('checkbox-transparent')
const fontSelector = document.getElementById('font-selector');
const fontSize = document.getElementById('font-size');
const buttonAlignCenter = document.getElementById('button-align-center');
const buttonAlignRigth = document.getElementById('button-align-right');
const buttonAlignLeft = document.getElementById('button-align-left')
const SelectLineHeigth = document.getElementById('select-line-height')
const inputColorFondoName = document.getElementById('input-color-image-fondo');
const inputColorTextName = document.getElementById('input-color-text-name');
const inputSpace = document.getElementById('input-space');
const containerMeme = document.getElementById('container-meme');


buttonIconX.addEventListener('click', () => closeAside())
urlMeme.addEventListener('input', (e)=>insertarImagen(e));
selectImage.addEventListener("change", () => imagenColor());
brightInput.addEventListener("input", () => filtros());
opacityInput.addEventListener("input", () => filtros());
blurInput.addEventListener('input', () => filtros());
grayScaleInput.addEventListener('input', () => filtros());
sepiaInput.addEventListener('input', () => filtros());
hueRotationInput.addEventListener('input', () => filtros());
saturationInput.addEventListener('input', () => filtros());
contrastInput.addEventListener('input', () => filtros());
buttonMode.addEventListener ('click', (e)=>oscurecer(e));
downloadButton.addEventListener("click", () => downloadMeme());
inputColor.addEventListener("input", () => changeColor());
buttonText.addEventListener("click", () => changeAside());
buttonImage.addEventListener("click", () => changeAsides());
inputColorFondo.addEventListener("input", () => changeColorFondo());
inputColorText.addEventListener("input", () => changeColorText());
textareaBottomText.addEventListener("input", () => changeText());
textareaTopText.addEventListener("input", () => changeText());
checkboxBottomText.addEventListener("input", () => hideBottomText());
checkboxTopText.addEventListener("input", () => hideTopText());
checkboxTransparent.addEventListener("input", () => fondoTransparent())
fontSelector.addEventListener("input", () => typefont())
fontSize.addEventListener("input", () => inputFontSize())
buttonAlignCenter.addEventListener("click", () => textAlignCenter());
buttonAlignLeft.addEventListener("click", () => textAlignLeft());
buttonAlignRigth.addEventListener("click", () => textAlignRigth());
SelectLineHeigth.addEventListener("input", () => selectionLineHeigth())
inputSpace.addEventListener("input", () => spaceText())


const closeAside = () => {
    asideText.classList.add("display-none")
    asideImage.classList.add("display-none")    
}

const  insertarImagen = (e) => {
    imageMeme.style.backgroundImage = `url('${e.target.value}')`
}

const filtros = () => {
    imageMeme.style.filter = `brightness(${brightInput.value}) opacity(${opacityInput.value}) blur(${blurInput.value}px) contrast(${contrastInput.value}%) grayscale(${grayScaleInput.value}%) hue-rotate(${hueRotationInput.value}deg) sepia(${sepiaInput.value}%) saturate(${saturationInput.value}%) invert(${invertInput.value})`
}

 const imagenColor = () => {
         imageMeme.style.backgroundBlendMode = `${selectImage.value}`
 }
 console.log(selectImage.value)

const oscurecer = (e) => {
    header.classList.toggle ("modo-oscuro")
    main.classList.toggle ("modo-oscuro")
    asideText.classList.toggle ("modo-oscuro")
    asideImage.classList.toggle ("modo-oscuro")
    
    if (buttonMode.innerText === "Modo oscuro") {
         buttonMode.innerHTML = "Modo claro";
     } else {
        buttonMode.innerHTML= "Modo oscuro";
     }
 }


const downloadMeme = () => {
  domtoimage.toBlob(containerMeme).then(function (blob) {
    window.saveAs(blob, "mi-meme.png");
  });
};

const changeColor = () => {
    colorName.innerHTML = `${inputColor.value}`
    imageMeme.style.backgroundColor = `${inputColor.value}`
}

const changeText = () => {
    bottomText.innerHTML = `${textareaBottomText.value}`
    topText.innerHTML= `${textareaTopText.value}`
}

const hideBottomText = () => {
    if (checkboxBottomText.checked) {
        bottomText.classList.add("display-none")
    } else {
        bottomText.classList.remove("display-none")
    }
}

const hideTopText = () => {
    if (checkboxTopText.checked) {
        topText.classList.add("display-none")
    } else {
        topText.classList.remove("display-none")
    }
}

const typefont = () => {
    topText.style.fontFamily = `${fontSelector.value}`
    bottomText.style.fontFamily = `${fontSelector.value}`
}
const inputFontSize = () => {
    topText.style.fontSize = `${fontSize.value}`
    bottomText.style.fontSize = `${fontSize.value}`
}

const textAlignCenter = () => {
    topText.style.textAlign = 'center';
    bottomText.style.textAlign = 'center';
}
const textAlignRigth = () => {
     topText.style.textAlign = 'right';
     bottomText.style.textAlign = 'right';
}
const textAlignLeft = () => {
    topText.style.textAlign = 'left';
    bottomText.style.textAlign = 'left';
}

const changeColorText = () => {
    inputColorTextName.innerHTML = `${inputColorText.value}`
    topText.style.color = `${inputColorText.value}`
    bottomText.style.color = `${inputColorText.value}`
    
}

const changeColorFondo = () => {
    inputColorFondoName.innerHTML = `${inputColorFondo.value}`
    bottomText.style.backgroundColor = `${inputColorFondo.value}`
    topText.style.backgroundColor = `${inputColorFondo.value}`
}

const fondoTransparent = () => {
    if (checkboxTransparent.checked) {
    containerMeme.style.position = 'relative' 
    imageMeme.style.position = 'absolute'
    imageMeme.style.top = '0'  
    topText.style.position = 'absolute'
    topText.style.top = '0'
    bottomText.style.bottom = '0'
    bottomText.style.position = 'absolute'  
    topText.style.backgroundColor = 'transparent'
    bottomText.style.backgroundColor = 'transparent'
     // containerBottomText.classList.add("position-absolute")
    // containerTopText.classList.add("position-absolute")
    // containerBottomText.classList.add("fondo-transparente")
    // containerTopText.classList.add("fondo-transparente")
    // containerTopText.classList.add("fondo-transparente")
    } else {
        // containerBottomText.classList.remove("fondo-transparente")
        // containerTopText.classList.remove("fondo-transparente")
        // containerMeme.style.position = 'relative' 
        topText.style.position = 'static'
        bottomText.style.position = 'static'
        topText.style.top = '0'
        bottomText.style.bottom = '0'
        imageMeme.style.position = 'absolute'
        imageMeme.style.top = '0'  
        // containerBottomText.classList.remove("position-absolute")
        // containerTopText.classList.remove("position-absolute")
        // imageMeme.classList.remove("position-absolute-image")
        
    }
}

const spaceText = () => {
    topText.style.padding = `${inputSpace.value}`
    bottomText.style.padding = `${inputSpace.value}`
}

const selectionLineHeigth = () => {
    // containerBottomText.style.lineHeight = `${SelectLineHeigth.value}`
     bottomText.style.lineHeight = `${SelectLineHeigth.value}`
     topText.style.lineHeight = `${SelectLineHeigth.value}`
    // containerTopText.style.lineHeight = `${SelectLineHeigth.value}`
}


const changeAside = () => {
    asideImage.classList.add('display-none')
    asideText.classList.remove('display-none')
}
const changeAsides = () => {
    asideText.classList.add('display-none')
    asideImage.classList.remove('display-none')
}





