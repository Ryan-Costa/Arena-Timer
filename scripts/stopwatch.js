var minutes = 0;
var seconds = 0;
const time = 1000; // Quantos milésimos há em um segundo
var stopwatch;
var format;
var input;
var startButton = document.getElementById('start') // Declarando o evento para o botão Iniciar para as outras funções enxergarem



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
  var inputMin = document.getElementById('minutes')
  var inputSec = document.getElementById('seconds')
  
  
  minutes = inputMin.value
  seconds = inputSec.value

  input = minutes + ':' + seconds
  document.getElementById('counter').innerHTML = input
  
  inputMin.value = ''
  inputSec.value = ''
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

  format = (minutes < 10 ? '0' + minutes : minutes) + ':' + (seconds < 10 ? '0' + seconds : seconds);

  document.getElementById('counter').innerHTML = format
  
}



