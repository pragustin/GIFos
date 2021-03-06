// access DOM elements
let buttonDarkMode = document.querySelector('#dark-mode-button a')
let logoDesktop = document.querySelector('header source:first-of-type')
let logoMobile = document.querySelector('header source:last-of-type')
let cameraImg
let cameraImgRoll1
let cameraImgRoll2
let rollImg

// access DOM elements from crear-gifo.html
if(window.location.pathname === '/crear-gifo.html') {
    cameraImg = document.getElementById('camera-img')
    cameraImgRoll1 = document.getElementById('camera-img-roll1')
    cameraImgRoll2 = document.getElementById('camera-img-roll2')
    rollImg = document.getElementById('roll-img')
}

// access local storage value of key darkMode
let darkMode = localStorage.getItem('darkMode')

/**
 * change images atributte for dark mode
 * @param {string} element - the HTML node to change
 * @param {string} atributte - the HTML attribute to change
 * @param {string} url - the new url to set
 * @returns 
 */
let changeImg = (element, atributte, url) => element.setAttribute(atributte, url)

// eneble dark mode by checking local storage value
if (darkMode === 'enabled') {
    enableDarkMode()
}

// add class dark-mode to document and set local storage value to enabled. Modify DOM elements
function enableDarkMode() {
    document.documentElement.classList.add('dark-mode')
    localStorage.setItem('darkMode', 'enabled')
    buttonDarkMode.innerHTML = 'Modo Diurno'     
    changeImg(logoDesktop, 'srcset', './img/logo-modo-noc.svg')
    changeImg(logoMobile, 'srcset', './img/logo-mobile-modo-noct.svg')
    
    if(window.location.pathname === '/crear-gifo.html') {
        changeImg(cameraImg, 'src', './img/camara-modo-noc.svg')
        changeImg(cameraImgRoll1, 'src', './img/element_cinta1-modo-noc.svg')
        changeImg(cameraImgRoll2, 'src', './img/element_cinta2-modo-noc.svg')
        changeImg(rollImg, 'src', './img/pelicula-modo-noc.svg')
    }
}

//remove class dark-mode to document and set local storage value to disabled. Modify DOM elements
function disableDarkMode() {
    document.documentElement.classList.remove('dark-mode')
    localStorage.setItem('darkMode', 'disabled')
    buttonDarkMode.innerHTML = 'Modo Nocturno'     
    changeImg(logoDesktop, 'srcset', './img/logo-desktop.svg')
    changeImg(logoMobile, 'srcset', './img/logo-mobile.svg')
    
    if(window.location.pathname === '/crear-gifo.html') {
        changeImg(cameraImg, 'src', './img/camara.svg')
        changeImg(cameraImgRoll1, 'src', './img/element_cinta1.svg')
        changeImg(cameraImgRoll2, 'src', './img/element_cinta2.svg')
        changeImg(rollImg, 'src', './img/pelicula.svg')
    }
}

// enable or disable dark mode by checking local storage value
function toggleDarkMode() {
    darkMode = localStorage.getItem('darkMode')
    if(darkMode === null || darkMode === 'disabled') {
        enableDarkMode()
    } else {
        disableDarkMode()
    }
}

export {buttonDarkMode, toggleDarkMode}