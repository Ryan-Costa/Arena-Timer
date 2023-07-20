var supBar = document.querySelector('.frame');

var buttonStart = document.querySelector('#start')
var buttonPause = document.querySelector('#pause')
var buttonStop = document.querySelector('#stop')

var buttonCeara = document.querySelector('#csc')
var buttonFortaleza = document.querySelector('#for')
var buttonArena = document.querySelector('#arena')

var settingsIcon = document.querySelector("#settingsSvg");
var minimizeIcon = document.querySelector("#minimizeSvg");
var closeIcon = document.querySelector("#closeSvg");

function changeTheme(className, minimizeImage, closeImage) {
  if (supBar.classList.value == className) {
    minimizeIcon.setAttribute('src', minimizeImage);
    closeIcon.setAttribute('src', closeImage);
  } else {
    minimizeIcon.setAttribute('src', 'assets/minimize.svg');
    closeIcon.setAttribute('src', 'assets/close.svg');
  }
}

function cearaTheme() {
      const classMap = {
        'frame addColorFortaleza': 'addColorFortaleza',
        'frame addColorArena': 'addColorArena',
      };
      
      const currentClass = supBar.classList.value;
      const classToRemove = classMap[currentClass];
      
      if (classToRemove) {
        supBar.classList.remove(classToRemove);
      }
      
      supBar.classList.toggle('addColorCeara');

      changeTheme('frame addColorCeara', 'assets/minimizeWhite.svg', 'assets/closeWhite.svg');

      const buttons = [buttonStart, buttonPause, buttonStop];
      const classesToRemove = ['buttonsFortaleza', 'buttonsArena'];

      buttons.forEach(button => {
        classesToRemove.forEach(classToRemove => {
          if (button.classList.contains(classToRemove) && (button.classList.value === `allButtonsStopwatch ${classToRemove}` || button.classList.contains('configDisabledButton'))) {
            button.classList.remove(classToRemove)
          }
        });
      });

      buttonStart.classList.toggle('buttonsCeara')
      buttonPause.classList.toggle('buttonsCeara')
      buttonStop.classList.toggle('buttonsCeara')
      
      const classCounterMap = {
        'counterFortaleza': 'counterFortaleza',
        'counterArena': 'counterArena',
      };
      
      const currentCounterClass = counter.classList.value;
      const classCounterToRemove = classCounterMap[currentCounterClass];
      
      if (classCounterToRemove) {
        counter.classList.remove(classCounterToRemove);
      }
      
      counter.classList.toggle('counterCeara');
}

buttonCeara.addEventListener('click', cearaTheme);


function fortalezaTheme(){
      const classMap = {
        'frame addColorCeara': 'addColorCeara',
        'frame addColorArena': 'addColorArena',
      };
      
      const currentClass = supBar.classList.value;
      const classToRemove = classMap[currentClass];
      
      if (classToRemove) {
        supBar.classList.remove(classToRemove);
      }
      
      supBar.classList.toggle('addColorFortaleza');

      changeTheme('frame addColorFortaleza', 'assets/minimizeWhite.svg', 'assets/closeWhite.svg');

      const buttons = [buttonStart, buttonPause, buttonStop];
      const classesToRemove = ['buttonsCeara', 'buttonsArena'];

      buttons.forEach(button => {
        classesToRemove.forEach(classToRemove => {
          if (button.classList.contains(classToRemove) && (button.classList.value === `allButtonsStopwatch ${classToRemove}` || button.classList.contains('configDisabledButton'))) {
            button.classList.remove(classToRemove)
          }
        });
      });
      
      buttonStart.classList.toggle('buttonsFortaleza')
      buttonPause.classList.toggle('buttonsFortaleza')
      buttonStop.classList.toggle('buttonsFortaleza')

      const classCounterMap = {
        'counterCeara': 'counterCeara',
        'counterArena': 'counterArena',
      };
      
      const currentCounterClass = counter.classList.value;
      const classCounterToRemove = classCounterMap[currentCounterClass];
      
      if (classCounterToRemove) {
        counter.classList.remove(classCounterToRemove);
      }
      
      counter.classList.toggle('counterFortaleza');
}

buttonFortaleza.addEventListener('click', fortalezaTheme);

function arenaTheme(){
  const classMap = {
    'frame addColorCeara': 'addColorCeara',
    'frame addColorFortaleza': 'addColorFortaleza',
  };
  
  const currentClass = supBar.classList.value;
  const classToRemove = classMap[currentClass];
  
  if (classToRemove) {
    supBar.classList.remove(classToRemove);
  }

  supBar.classList.toggle('addColorArena');


  changeTheme('frame addColorArena', 'assets/minimizeWhite.svg', 'assets/closeWhite.svg');

  const buttons = [buttonStart, buttonPause, buttonStop];
      const classesToRemove = ['buttonsCeara', 'buttonsFortaleza'];

      buttons.forEach(button => {
        classesToRemove.forEach(classToRemove => {
          if (button.classList.contains(classToRemove) && (button.classList.value === `allButtonsStopwatch ${classToRemove}` || button.classList.contains('configDisabledButton'))) {
            button.classList.remove(classToRemove)
          }
        });
      });
  
  buttonStart.classList.toggle('buttonsArena')
  buttonPause.classList.toggle('buttonsArena')
  buttonStop.classList.toggle('buttonsArena')
  
  const classCounterMap = {
    'counterCeara': 'counterCeara',
    'counterFortaleza': 'counterFortaleza',
  };
  
  const currentCounterClass = counter.classList.value;
  const classCounterToRemove = classCounterMap[currentCounterClass];
  
  if (classCounterToRemove) {
    counter.classList.remove(classCounterToRemove);
  }
  
  counter.classList.toggle('counterArena');
}

buttonArena.addEventListener('click', arenaTheme);

