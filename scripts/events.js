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
var buttonArena = document.querySelector('#arena')

// Variáveis que recebem as imagens dos ícones da barra superior
var settingsIcon = document.querySelector("#settingsSvg");
var minimizeIcon = document.querySelector("#minimizeSvg");
var closeIcon = document.querySelector("#closeSvg");

// === === === === === === === === === === === === === === === === === ===

function changeDisplay() {
  divConfig.classList.toggle('addDisplayNone');
}

buttonConfig.addEventListener('click', changeDisplay);

function cearaTheme() {
      // Barra superior
      switch(supBar.classList.value) {
        case 'frame addColorFortaleza':
          supBar.classList.remove('addColorFortaleza');
          break;

        case 'frame addColorArena':
          supBar.classList.remove('addColorArena');
          break;
      }
      supBar.classList.toggle('addColorCeara');
      
      // === === === === === === === === === === === === === === === === === ===
      // condicional para saber se a cor da barra superior foi alterada para trocar os ícones por brancos.
      // === === === === === === === === === === === === === === === === === ===

      if(supBar.classList.value == 'frame addColorCeara'){
          settingsIcon.setAttribute('src', 'assets/settingsWhite.svg');
          minimizeIcon.setAttribute('src', 'assets/minimizeWhite.svg');
          closeIcon.setAttribute('src', 'assets/closeWhite.svg');
      }else {
          settingsIcon.setAttribute('src', 'assets/settings.svg');
          minimizeIcon.setAttribute('src', 'assets/minimize.svg');
          closeIcon.setAttribute('src', 'assets/close.svg');
      }

      // === === === === === === === === === === === === === === === === === ===
      // Botões
      // === === === === === === === === === === === === === === === === === ===
      if(buttonStart.classList.contains('configDisabledButton') && buttonStart.classList.contains('buttonsFortaleza')){
        buttonStart.classList.remove('buttonsFortaleza')
      }
  
      if(buttonStart.classList.value == 'allButtonsStopwatch buttonsFortaleza'){
          buttonStart.classList.remove('buttonsFortaleza')
      }
      if(buttonPause.classList.value == 'allButtonsStopwatch buttonsFortaleza'){
          buttonPause.classList.remove('buttonsFortaleza')
      }
      if(buttonStop.classList.value == 'allButtonsStopwatch buttonsFortaleza'){
          buttonStop.classList.remove('buttonsFortaleza')
      }
      
      // === === === === === === === === === === === === === === === === === ===
      if(buttonStart.classList.contains('configDisabledButton') && buttonStart.classList.contains('buttonsArena')){
        buttonStart.classList.remove('buttonsArena')
      }
      
      if(buttonStart.classList.value == 'allButtonsStopwatch buttonsArena'){
          buttonStart.classList.remove('buttonsArena')
      }
      if(buttonPause.classList.value == 'allButtonsStopwatch buttonsArena'){
        buttonPause.classList.remove('buttonsArena')
      }
      if(buttonStop.classList.value == 'allButtonsStopwatch buttonsArena'){
        buttonStop.classList.remove('buttonsArena')
      }

      buttonStart.classList.toggle('buttonsCeara')
      buttonPause.classList.toggle('buttonsCeara')
      buttonStop.classList.toggle('buttonsCeara')
      
      // === === === === === === === === === === === === === === === === === ===
      // Contador
      // === === === === === === === === === === === === === === === === === ===

      if(counter.classList.value == 'counterFortaleza'){
        counter.classList.remove('counterFortaleza')
      }
      if(counter.classList.value == 'counterArena'){
        counter.classList.remove('counterArena')
      }
      counter.classList.toggle('counterCeara')
}

buttonCeara.addEventListener('click', cearaTheme);


function fortalezaTheme(){
      // Barra superior
      switch(supBar.classList.value) {
        case 'frame addColorCeara':
          supBar.classList.remove('addColorCeara');
          break;

        case 'frame addColorArena':
          supBar.classList.remove('addColorArena');
          break;
      }
      supBar.classList.toggle('addColorFortaleza');

      // === === === === === === === === === === === === === === === === === ===
      // condicional para saber se a cor da barra superior foi alterada para trocar os ícones por brancos.
      // === === === === === === === === === === === === === === === === === ===
       
      if(supBar.classList.value == 'frame addColorFortaleza'){
        settingsIcon.setAttribute('src', 'assets/settingsWhite.svg');
        minimizeIcon.setAttribute('src', 'assets/minimizeWhite.svg');
        closeIcon.setAttribute('src', 'assets/closeWhite.svg');
      }else {
        settingsIcon.setAttribute('src', 'assets/settings.svg');
        minimizeIcon.setAttribute('src', 'assets/minimize.svg');
        closeIcon.setAttribute('src', 'assets/close.svg');
      }

      // === === === === === === === === === === === === === === === === === ===
      // Botões
      // === === === === === === === === === === === === === === === === === ===

      if(buttonStart.classList.contains('configDisabledButton') && buttonStart.classList.contains('buttonsCeara')){
        buttonStart.classList.remove('buttonsCeara')
      }else if(buttonStart.classList.value == 'allButtonsStopwatch buttonsCeara'){
        buttonStart.classList.remove('buttonsCeara')
      } else if(buttonStart.classList.contains('configDisabledButton') && buttonStart.classList.contains('buttonsArena')){
        buttonStart.classList.remove('buttonsArena')
      }else if(buttonStart.classList.value == 'allButtonsStopwatch buttonsArena'){
        buttonStart.classList.remove('buttonsArena')
      }
      
      if(buttonPause.classList.value == 'allButtonsStopwatch buttonsCeara'){
        buttonPause.classList.remove('buttonsCeara')
      }else if(buttonPause.classList.value == 'allButtonsStopwatch buttonsArena'){
        buttonPause.classList.remove('buttonsArena')
      }

      if(buttonStop.classList.value == 'allButtonsStopwatch buttonsCeara'){
        buttonStop.classList.remove('buttonsCeara')
      }else if(buttonStop.classList.value == 'allButtonsStopwatch buttonsArena'){
        buttonStop.classList.remove('buttonsArena')
      }
      
      // === === === === === === === === === === === === === === === === === ===
      
      buttonStart.classList.toggle('buttonsFortaleza')
      buttonPause.classList.toggle('buttonsFortaleza')
      buttonStop.classList.toggle('buttonsFortaleza')
      
      // === === === === === === === === === === === === === === === === === ===
      // Contador
      // === === === === === === === === === === === === === === === === === ===

      if(counter.classList.value == 'counterCeara'){
        counter.classList.remove('counterCeara')
      }
      if(counter.classList.value == 'counterArena'){
        counter.classList.remove('counterArena')
      }
      counter.classList.toggle('counterFortaleza')
}

buttonFortaleza.addEventListener('click', fortalezaTheme);

function arenaTheme(){
  // Barra superior
  switch(supBar.classList.value) {
    case 'frame addColorCeara':
      supBar.classList.remove('addColorCeara');
      break;

    case 'frame addColorFortaleza':
      supBar.classList.remove('addColorFortaleza');
      break;
  }
  supBar.classList.toggle('addColorArena');

  // === === === === === === === === === === === === === === === === === ===
  // condicional para saber se a cor da barra superior foi alterada para trocar os ícones por brancos.
  // === === === === === === === === === === === === === === === === === ===
   
  if(supBar.classList.value == 'frame addColorArena'){
    settingsIcon.setAttribute('src', 'assets/settingsWhite.svg');
    minimizeIcon.setAttribute('src', 'assets/minimizeWhite.svg');
    closeIcon.setAttribute('src', 'assets/closeWhite.svg');
  }else {
    settingsIcon.setAttribute('src', 'assets/settings.svg');
    minimizeIcon.setAttribute('src', 'assets/minimize.svg');
    closeIcon.setAttribute('src', 'assets/close.svg');
  }

  // === === === === === === === === === === === === === === === === === ===
  // Botões
  // === === === === === === === === === === === === === === === === === ===
  if(buttonStart.classList.contains('configDisabledButton') && buttonStart.classList.contains('buttonsCeara')){
    buttonStart.classList.remove('buttonsCeara')
  }else if(buttonStart.classList.value == 'allButtonsStopwatch buttonsCeara'){
    buttonStart.classList.remove('buttonsCeara')
  }else if(buttonStart.classList.contains('configDisabledButton') && buttonStart.classList.contains('buttonsFortaleza')){
    buttonStart.classList.remove('buttonsFortaleza')
  }
  
  if(buttonPause.classList.value == 'allButtonsStopwatch buttonsCeara'){
    buttonPause.classList.remove('buttonsCeara')
  }else 
  
  if(buttonStop.classList.value == 'allButtonsStopwatch buttonsCeara'){
    buttonStop.classList.remove('buttonsCeara')
  }
  
  // === === === === === === === === === === === === === === === === === ===
  
  
  if(buttonStart.classList.value == 'allButtonsStopwatch buttonsFortaleza'){
    buttonStart.classList.remove('buttonsFortaleza')
  }
  if(buttonPause.classList.value == 'allButtonsStopwatch buttonsFortaleza'){
    buttonPause.classList.remove('buttonsFortaleza')
  }
  if(buttonStop.classList.value == 'allButtonsStopwatch buttonsFortaleza'){
    buttonStop.classList.remove('buttonsFortaleza')
  }
  buttonStart.classList.toggle('buttonsArena')
  buttonPause.classList.toggle('buttonsArena')
  buttonStop.classList.toggle('buttonsArena')
  
  // === === === === === === === === === === === === === === === === === ===
  // Contador
  // === === === === === === === === === === === === === === === === === ===

  if(counter.classList.value == 'counterCeara'){
    counter.classList.remove('counterCeara')
  }
  if(counter.classList.value == 'counterFortaleza'){
    counter.classList.remove('counterFortaleza')
  }
  counter.classList.toggle('counterArena')
}

buttonArena.addEventListener('click', arenaTheme);

