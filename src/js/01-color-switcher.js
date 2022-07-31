
const startBtn = document.querySelector('[data-start]');
const stopBtn = document.querySelector('[data-stop]');

startBtn.addEventListener('click', onStartHandler);
stopBtn.addEventListener('click', onStopHandler);

function getRandomHexColor() {
    return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
  }

  let myInterval;

function onStartHandler (){
    myInterval = setInterval(() => { document.body.style.backgroundColor = getRandomHexColor()},
      1000); 
    
    stopBtn.removeAttribute("disabled");
    startBtn.setAttribute("disabled", true);
}

function onStopHandler (){
    clearInterval(myInterval);
    startBtn.removeAttribute("disabled");
    stopBtn.setAttribute("disabled", true);
};


