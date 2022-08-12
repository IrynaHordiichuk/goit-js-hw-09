import Notiflix from 'notiflix';

const refs = {
  form: document.querySelector('.form'),
};

refs.form.addEventListener('submit', onSubmit);

function onSubmit(event) {
  event.preventDefault();

  let delay = Number(event.currentTarget.elements.delay.value);
  let step = Number(event.currentTarget.elements.step.value);
  let amount = Number(event.currentTarget.elements.amount.value);

  for (let i = 1; i <= amount; i += 1) {
    position = i;

    createPromise(position, delay)
      .then(({ position, delay }) => {
        Notiflix.Notify.success(
          `✅ Fulfilled promise ${position} in ${delay}ms`
        );
        console.log(`✅ Fulfilled promise ${position} in ${delay}ms`);
      })
      .catch(({ position, delay }) => {
        Notiflix.Notify.failure(
          `❌ Rejected promise ${position} in ${delay}ms`
        );
        console.log(`❌ Rejected promise ${position} in ${delay}ms`);
      });

    delay += step;
  }
  event.target.reset();
}

function createPromise(position, delay) {
  return new Promise((resolve, reject) =>
    setTimeout(() => {
      const shouldResolve = Math.random() > 0.3;
      if (shouldResolve) {
        resolve({ position, delay });
      } else {
        reject({ position, delay });
      }
    }, delay)
  );
}

// =============================================================================================
// const refs = {
//   form: document.querySelector('.form'),
//   firstDelay: document.querySelector('[name = "delay"]'),
//   delayStep: document.querySelector('[name = "step"]'),
//   amount: document.querySelector('[name="amount"]'),
//   }

// const delay = refs.firstDelay.value;
// const step = refs.delayStep.value
// const amount = refs.amount.value;

// ====================================================

//   for( let i = 0; i < amount; i += 1){
//     const position = i+1;
//      new Promise((resolve, reject) => setTimeout(()=> {

//         const shouldResolve = Math.random() > 0.3;
//         if (shouldResolve) {
//             resolve(position)

//       } else {
//           reject(position)
//         }

//     }, myDelay + (step * i )))
// }

// ====================================================

// for(let i =0; i<randomnumb) {
//     setTimeout(()=> какая-то функция, i*300  )}
