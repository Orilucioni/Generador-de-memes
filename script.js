// --------------DECLARAMOS VARIABLES PARA ELEMENTOS DE MAIN----------


const header = document.getElementById('container-header');
const main = document.getElementById('container-main');
const buttonText = document.getElementById('button-text');
const buttonImage = document.getElementById('button-image')
const topText = document.getElementById('top-text');
const bottomText = document.getElementById('bottom-text');
const imageMeme = document.getElementById('image-meme');
const containerMeme = document.getElementById('container-meme');
const meme = document.getElementById("meme-container");
const asideText = document.getElementById('aside-text');
const asideImage = document.getElementById('aside-image');

// -------------- SECCION ASIDE IMAGEN -------------


// ----FUNCION PARA CERRAR ASIDES---

const buttonIconX = document.getElementById('button-icon-x');
const buttonIconClose = document.getElementById('button-icon-close')
buttonIconX.addEventListener('click', () => closeAside())
buttonIconClose.addEventListener('click', () => closeAsideText())

const closeAside = () => {
    asideImage.classList.add("display-none")    
}
const closeAsideText = () => {
    asideText.classList.add("display-none")    
}

// ---FUNCION INSERTAR URL DE IMAGEN---

const urlMeme =  document.getElementById('url-input');
urlMeme.addEventListener('input', (e)=>insertarImagen(e));

const  insertarImagen = (e) => {
    imageMeme.style.backgroundImage = `url('${e.target.value}')`
}

// ---FUNCIONES PARA LOS DIFERENTES INPUT COLOR Y SELECT----

const inputColor = document.getElementById('input-color');
const colorName = document.getElementById ('color-Name');


inputColor.addEventListener("input", () => changeColor());

const changeColor = () => {
    colorName.innerHTML = `${inputColor.value}`
    imageMeme.style.backgroundColor = `${inputColor.value}`
}


const selectImage = document.getElementById('select-image-fondo');
selectImage.addEventListener("input", () => imagenColor());
 const imagenColor = () => {
         imageMeme.style.backgroundBlendMode = `${selectImage.value}`
 }

// ---FUNCION PARA FILTROS---

const brightInput = document.getElementById('brightness-input');
const opacityInput = document.getElementById('opacity-input');
const contrastInput = document.getElementById('contrast-input');
const blurInput = document.getElementById('blur-input');
const grayScaleInput = document.getElementById('gray-scale-input');
const sepiaInput = document.getElementById('sepia-input');
const hueRotationInput = document.getElementById('hue-rotation-input');
const saturationInput = document.getElementById('saturation-input');
const invertInput = document.getElementById('invert-input');

brightInput.addEventListener("input", () => filtros());
opacityInput.addEventListener("input", () => filtros());
blurInput.addEventListener('input', () => filtros());
grayScaleInput.addEventListener('input', () => filtros());
sepiaInput.addEventListener('input', () => filtros());
hueRotationInput.addEventListener('input', () => filtros());
saturationInput.addEventListener('input', () => filtros());
contrastInput.addEventListener('input', () => filtros());

const filtros = () => {
    imageMeme.style.filter = `brightness(${brightInput.value}) opacity(${opacityInput.value}) blur(${blurInput.value}px) contrast(${contrastInput.value}%) grayscale(${grayScaleInput.value}%) hue-rotate(${hueRotationInput.value}deg) sepia(${sepiaInput.value}%) saturate(${saturationInput.value}%) invert(${invertInput.value})`
}

// ------BOTON PARA RESETEAR FILTROS ------

const resetButton = document.getElementById('button-reset-filter');
resetButton.addEventListener('click', () => resetFilter());

const resetFilter = () => {
imageMeme.style.filter = `brightness(1) opacity(1) blur(0px) contrast(100%) grayscale(0%) hue-rotate(0deg) sepia(0%) saturate(100%) invert(0)`
brightInput.value = 1;
contrastInput.value = "100";
opacityInput.value = 1;
blurInput.value = "0";
grayScaleInput.value = "0";
hueRotationInput.value = "0"
sepiaInput.value = "0"
saturationInput.value = "100" 
invertInput.value = 0
}


// ------------------------- SECCION MAIN --------------------


// ------ MODO OSCURO --------

const buttonMode = document.getElementById('button-mode');
buttonMode.addEventListener ('click', (e)=>oscurecer(e));

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

//  BOTON DE DESCARGA

const downloadButton = document.getElementById("download-button");
downloadButton.addEventListener("click", () => downloadMeme());

const downloadMeme = () => {
  domtoimage.toBlob(containerMeme).then(function (blob) {
    window.saveAs(blob, "mi-meme.png");
  });
};


// ---------------------SECCION TEXTO----------------------

// ----------TEXTAREA------

const textareaTopText = document.getElementById('textarea-top-text');
const textareaBottomText = document.getElementById('textarea-bottom-text');
textareaBottomText.addEventListener("input", () => changeText());
textareaTopText.addEventListener("input", () => changeText());

const changeText = () => {
    bottomText.innerHTML = `${textareaBottomText.value}`
    topText.innerHTML= `${textareaTopText.value}`
}

// ----------CHECKBOX OCULTAR TEXTO-------
const checkboxBottomText = document.getElementById('checkbox-bottom-text');
const checkboxTopText = document.getElementById('checkbox-top-text')
checkboxBottomText.addEventListener("input", () => hideBottomText());
checkboxTopText.addEventListener("input", () => hideTopText());

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

// ---------TIPO DE FUENTE--------

const fontSelector = document.getElementById('font-selector');
fontSelector.addEventListener("input", () => typefont());
const typefont = () => {
    topText.style.fontFamily = `${fontSelector.value}`
    bottomText.style.fontFamily = `${fontSelector.value}`
}


// --------TAMAÑO DE FUENTE-----------
const fontSize = document.getElementById('font-size');
fontSize.addEventListener("input", () => inputFontSize())

const inputFontSize = () => {
    topText.style.fontSize = `${fontSize.value}`
    bottomText.style.fontSize = `${fontSize.value}`
}

// -----------ALINEACION DE TEXTO---------

const buttonAlignCenter = document.getElementById('button-align-center');
const buttonAlignRigth = document.getElementById('button-align-right');
const buttonAlignLeft = document.getElementById('button-align-left')
buttonAlignCenter.addEventListener("click", () => textAlignCenter());
buttonAlignLeft.addEventListener("click", () => textAlignLeft());
buttonAlignRigth.addEventListener("click", () => textAlignRigth());


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

// ----------COLOR DE TEXTO-------

const inputColorText = document.getElementById('input-color-text');
const inputColorTextName = document.getElementById('input-color-text-name');
inputColorText.addEventListener("input", () => changeColorText());

const changeColorText = () => {
    inputColorTextName.innerHTML = `${inputColorText.value}`
    topText.style.color = `${inputColorText.value}`
    bottomText.style.color = `${inputColorText.value}`
}

// ----------COLOR DE FONDO DE TEXTO--------
const inputColorFondo = document.getElementById('input-color-fondo');
const inputColorFondoName = document.getElementById('input-color-image-fondo');
inputColorFondo.addEventListener("input", () => changeColorFondo());

const changeColorFondo = () => {
    inputColorFondoName.innerHTML = `${inputColorFondo.value}`
    bottomText.style.backgroundColor = `${inputColorFondo.value}`
    topText.style.backgroundColor = `${inputColorFondo.value}`
}

// -----------FONDO TRANSPARENTE-----------
const checkboxTransparent = document.getElementById('checkbox-transparent');
checkboxTransparent.addEventListener("input", () => fondoTransparent());

const fondoTransparent = () => {
    if (checkboxTransparent.checked) {
    topText.style.backgroundColor = 'transparent'
    bottomText.style.backgroundColor = 'transparent'
    topText.style.position = 'absolute'
    bottomText.style.position = 'absolute'  
    topText.style.top = '0'
    bottomText.style.bottom = '0'
    } else 
    {
        topText.style.position = 'static'
        bottomText.style.position = 'static'
        topText.style.backgroundColor = `${inputColorFondo.value}`
        bottomText.style.backgroundColor = `${inputColorFondo.value}`
    }
}

// ----------CONTORNO------------
const buttonOutlineNone = document.getElementById('button-outline-none');
const buttonOutlineLigth = document.getElementById('button-outline-ligth');
const buttonOutlineDark = document.getElementById('button-outline-dark');

buttonOutlineNone.addEventListener("click", () => outlineTextNone());
buttonOutlineLigth.addEventListener("click", () => outlineTextLigth());
buttonOutlineDark.addEventListener("click", () => outlineTextDark());
    const outlineTextDark = () => {
        topText.style.webkitTextStrokeColor = 'black'
        topText.style.webkitTextStrokeWidth = '3px'
        bottomText.style.webkitTextStrokeColor = 'black'
        topText.style.webkitTextStrokeWidth = '3px'
 }
    const outlineTextLigth = () => {
        topText.style.webkitTextStrokeColor = 'white'
        topText.style.webkitTextStrokeWidth = '3px'
        bottomText.style.webkitTextStrokeColor = 'white'
        topText.style.webkitTextStrokeWidth = '3px'
 }
    const outlineTextNone = () => {
     topText.style.webkitTextStroke = 'transparent'
     bottomText.style.webkitTextStroke = 'transparent'
 }

// ---------ESPACIADO------------
const inputSpace = document.getElementById('input-space');
inputSpace.addEventListener("input", () => spaceText());

const spaceText = () => {
    topText.style.paddingTop = `${inputSpace.value}`
    topText.style.paddingBottom = `${inputSpace.value}`
    bottomText.style.paddingTop = `${inputSpace.value}`
    bottomText.style.paddingBottom = `${inputSpace.value}`
}

// ------------INTERLINEADO----------
const SelectLineHeigth = document.getElementById('select-line-height')
SelectLineHeigth.addEventListener("input", () => selectionLineHeigth())

const selectionLineHeigth = () => {
     bottomText.style.lineHeight = `${SelectLineHeigth.value}`
     topText.style.lineHeight = `${SelectLineHeigth.value}`
}

// -------------BOTONES ASIDE IMAGEN Y TEXTO------------
buttonText.addEventListener("click", () => changeAside());
buttonImage.addEventListener("click", () => changeAsides());

const changeAside = () => {
    asideImage.classList.add('display-none')
    asideText.classList.remove('display-none')
}

const changeAsides = () => {
    asideText.classList.add('display-none')
    asideImage.classList.remove('display-none')
}





