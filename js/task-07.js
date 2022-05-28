// Напиши скрипт, который реагирует на изменение значения input#font-size-control (событие input) и изменяет инлайн-стиль span#text обновляя свойство font-size. В результате при перетаскивании ползунка будет меняться размер текста.

const refs ={
  inputControlEl: document.querySelector("#font-size-control"),
  textEl : document.querySelector("#text")
}

refs.inputControlEl.addEventListener("input", onChangeFontSize)

function onChangeFontSize(event) {
  refs.textEl.style.fontSize = `${event.currentTarget.value}.px`
}



