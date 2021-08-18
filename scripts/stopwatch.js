var minutes = 0;
var seconds = 0;
const time = 1000; // Quantos milésimos há em um segundo
var stopwatch;
var format;
var input;
var startButton = document.getElementById('start') // Declarando o evento para o botão Iniciar para as outras funções enxergarem

var inputMin = document.getElementById('minutes') // Input dos minutos
var inputSec = document.getElementById('seconds') // Input dos segundos

var inputText = document.getElementById('inputText') // Input para palavras



function start(){
  if(!startButton.classList.contains('configDisabledButton')){
    startButton.classList.add('configDisabledButton');
    
    clearInterval(stopwatch);
    stopwatch = setInterval(() => {
      timer();
    }, time);
  }  
  
}

var insertButton = document.getElementById('insert')
insertButton.addEventListener('click', () => {

  console.log(inputMin)
  
  if(!startButton.classList.contains('configDisabledButton')){

    if(inputMin.value == '' || inputSec.value == '' || inputMin.value > 59 || inputSec.value > 59 || inputMin.value.length == 1 || inputSec.value.length == 1 ){
      document.getElementById('counter').innerHTML = '00:00'
      inputMin.value = ''
      inputSec.value = ''  
    } else {
  
      minutes = inputMin.value
      seconds = inputSec.value
      
      input = minutes + ':' + seconds
      document.getElementById('counter').innerHTML = input
      
      inputMin.value = ''
      inputSec.value = ''  
    }
  }
})

var insertTextButton = document.getElementById('insertTextButton')
insertTextButton.addEventListener('click', () => {

  if(!startButton.classList.contains('configDisabledButton')){
    document.getElementById('counter').innerHTML = inputText.value
  }

})

function pause(){ 
  startButton.classList.remove('configDisabledButton');
  clearInterval(stopwatch);
}

function stop(){
  startButton.classList.remove('configDisabledButton');
  clearInterval(stopwatch);

  minutes = 0;
  seconds = 0;

  document.getElementById('counter').innerHTML = '00:00'
}

function timer(){

  seconds++;

  if(seconds == 60){
    seconds = 0;
    minutes++;
  }  

  if(minutes == 60){
    minutes = 0;
  }

  format = minutes.toString().padStart(2, '0') + ':' + seconds.toString().padStart(2, '0')

  document.getElementById('counter').innerHTML = format
  
}



