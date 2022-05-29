// Напиши скрипт который, при наборе текста в инпуте input#name-input (событие input), подставляет его текущее значение в span#name-output. Если инпут пустой, в спане должна отображаться строка "Anonymous".

const refs ={
  textInputEl : document.querySelector("#name-input"),
  outputEl : document.querySelector("#name-output")
}
console.log(refs.textInputEl);



refs.textInputEl.addEventListener("input", onInputChangesName)

function onInputChangesName(event) {

  if(refs.textInputEl.value.trim() === ""){
    refs.outputEl.textContent = "Anonymous"
 }
 
  refs.outputEl.textContent = event.currentTarget.value.trim();

}

