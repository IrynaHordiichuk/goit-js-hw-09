
import flatpickr from "flatpickr";
import Notiflix from 'notiflix';
import "flatpickr/dist/flatpickr.min.css";

const refs = {
  input: document.querySelector("#datetime-picker"),
  startBtn: document.querySelector("[data-start]"),
  days: document.querySelector("[data-days]"),
  hours: document.querySelector("[data-hours]"),
  minutes: document.querySelector("[data-minutes]"),
  seconds: document.querySelector("[data-seconds]"),
}
console.log(refs.startBtn);
console.log(refs.input);
console.log('object');

let selectedDate = null;

const options = {
    enableTime: true,
    time_24hr: true,
    defaultDate: new Date(),
    minuteIncrement: 1,
    onClose,
  };

 

  function onClose(selectedDates) {
    
    refs.startBtn.setAttribute("active", true);
    if(selectedDates[0] < Date.now()){
      Notiflix.Notify.warning("Please choose a date in the future");
  } else {
    
    selectedDate = selectedDates[0];
  }
};

 flatpickr(refs.input, options);
 
function addLeadingZero(value){
  return String(value).padStart(2, '0');
}

refs.startBtn.addEventListener("click", startTimer);

function startTimer(){
  refs.startBtn.removeAttribute("active");
 const timerId = setInterval( () => {
  let timeDifference = selectedDate - Date.now();

  if(timeDifference <= 0){ 
    clearInterval(timerId);
  return;
}
const convertedTime = convertMs(timeDifference);
console.log(convertedTime);
  refs.days.textContent = addLeadingZero(convertedTime.days);
  refs.hours.textContent = addLeadingZero(convertedTime.hours);
  refs.minutes.textContent = addLeadingZero(convertedTime.minutes);
  refs.seconds.textContent = addLeadingZero(convertedTime.seconds);


}, 1000)
}


function convertMs(ms) {
  // Number of milliseconds per unit of time
  const second = 1000;
  const minute = second * 60;
  const hour = minute * 60;
  const day = hour * 24;

  const days = Math.floor(ms / day);
  const hours = Math.floor((ms % day) / hour);
  const minutes = Math.floor(((ms % day) % hour) / minute);
  const seconds = Math.floor((((ms % day) % hour) % minute) / second);

  return { days, hours, minutes, seconds };
}


// btn.disable = true