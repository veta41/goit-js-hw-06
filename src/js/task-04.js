// Счетчик состоит из спана и кнопок, которые, при клике, должны увеличивать и уменьшать его значение на единицу.

// Создай переменную counterValue в которой будет храниться текущее значение счетчика и инициализируй её значением 0.
// Добавь слушатели кликов на кнопки, внутри которых увеличивай или уменьшай значение счтетчика.
// Обновляй интерфейс новым значением переменной counterValue.


const refs = {

  decrementBtn : document.querySelector('[data-action="decrement"]'),
  incrementBtn : document.querySelector('[data-action="increment"]'),
  counterValueEl : document.querySelector('#value')
  

}

let counterValue = 0;

refs.decrementBtn.addEventListener("click", onDecrementBtnClick);
refs.incrementBtn.addEventListener("click", onIncrementClick);



function onIncrementClick() {
  counterValue += 1;
  refs.counterValueEl.textContent = counterValue;
}


function onDecrementBtnClick() {
  counterValue -= 1;
  refs.counterValueEl.textContent = counterValue;
}



