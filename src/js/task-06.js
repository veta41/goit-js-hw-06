// Напиши скрипт, который при потере фокуса на инпуте (событие blur), проверяет его содержимое на правильное количество введённых символов.
// Сколько символов должно быть в инпуте, указывается в его атрибуте data-length.
// Если введено подходящее количество символов, то border инпута становится зелёным, если неправильное - красным.
// Для добавления стилей, используй CSS-классы valid и invalid, которые мы уже добавили в исходные файлы задания.

const inputEl = document.querySelector("#validation-input");

const symbolLength = inputEl.dataset.length

console.log(symbolLength);


inputEl.addEventListener("blur", onInputClassAdd);

function onInputClassAdd(event) {
if(event.currentTarget.value.length === parseInt(symbolLength)) {
    
  inputEl.classList.add("valid");
  inputEl.classList.remove("invalid");
    } else {

  inputEl.classList.add("invalid"); 
  inputEl.classList.remove("valid");
  }
 
}

