// Variável que recebe o botão/ícone de configuração
var buttonConfig = document.querySelector('#configButton');

// Variável que recebem a div de configurações
var divConfig = document.querySelector('.divConfig');

// Variável que recebe a barra superior
var supBar = document.querySelector('.frame');

// Variáveis para receber os botões do cronometro
var buttonStart = document.querySelector('#start')
var buttonPause = document.querySelector('#pause')
var buttonStop = document.querySelector('#stop')

// Variáveis que recebe, o botão referente as cores das equipes
var buttonCeara = document.querySelector('#csc')
var buttonFortaleza = document.querySelector('#for')
var buttonDefault = document.querySelector('#default')

// Variáveis que recebem as imagens dos ícones da barra superior
var settingsIcon = document.querySelector("#settingsSvg");
var minimizeIcon = document.querySelector("#minimizeSvg");
var closeIcon = document.querySelector("#closeSvg");


function changeDisplay() {
  divConfig.classList.toggle('addDisplayNone');
}

buttonConfig.addEventListener('click', changeDisplay);

function cearaTheme() {
      if(supBar.classList.value == 'frame addColorFortaleza'){
        supBar.classList.remove('addColorFortaleza')
      }
      supBar.classList.toggle('addColorCeara');
      
      // condicional para saber se a cor da barra superior foi alterada para trocar os ícones por brancos.
      if(supBar.classList.value == 'frame addColorCeara'){
        settingsIcon.setAttribute('src', 'assets/settingsWhite.svg');
        minimizeIcon.setAttribute('src', 'assets/minimizeWhite.svg');
        closeIcon.setAttribute('src', 'assets/closeWhite.svg');
      }else {
        settingsIcon.setAttribute('src', 'assets/settings.svg');
        minimizeIcon.setAttribute('src', 'assets/minimize.svg');
        closeIcon.setAttribute('src', 'assets/close.svg');
      }
      // Botões
      if(buttonStart.classList.value == 'allButtonsStopwatch buttonsFortaleza'){
        buttonStart.classList.remove('buttonFortaleza')

        buttonStart.classList.toggle('buttonsCeara')
      }
      
      buttonPause.classList.toggle('buttonsCeara')
      buttonStop.classList.toggle('buttonsCeara')
      
      // Contador
      counter.classList.toggle('counterFortaleza')
}

buttonCeara.addEventListener('click', cearaTheme);


function fortalezaTheme(){
      if(supBar.classList.value == 'frame addColorCeara'){
        supBar.classList.remove('addColorCeara')
      }
      supBar.classList.toggle('addColorFortaleza')

      // condicional para saber se a cor da barra superior foi alterada para trocar os ícones por brancos.
      if(supBar.classList.value == 'frame addColorFortaleza'){
        settingsIcon.setAttribute('src', 'assets/settingsWhite.svg');
        minimizeIcon.setAttribute('src', 'assets/minimizeWhite.svg');
        closeIcon.setAttribute('src', 'assets/closeWhite.svg');
      }else {
        settingsIcon.setAttribute('src', 'assets/settings.svg');
        minimizeIcon.setAttribute('src', 'assets/minimize.svg');
        closeIcon.setAttribute('src', 'assets/close.svg');
      }
      // Botões
      buttonStart.classList.toggle('buttonsFortaleza')
      buttonPause.classList.toggle('buttonsFortaleza')
      buttonStop.classList.toggle('buttonsFortaleza')

      // Contador
      counter.classList.toggle('counterFortaleza')

}

buttonFortaleza.addEventListener('click', fortalezaTheme);

