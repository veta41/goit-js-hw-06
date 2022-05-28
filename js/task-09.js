// Напиши скрипт, который изменяет цвета фона элемента <body> через инлайн стиль при клике на button.change-color и выводит значение цвета в span.color.
// Для генерации случайного цвета используй функцию getRandomHexColor.



const refs ={

body : document.querySelector("body"),
btnchangeColor : document.querySelector(".change-color"),
colorText : document.querySelector(".color")

}

refs.btnchangeColor.addEventListener("click", () => { 
refs.colorText.textContent = getRandomHexColor();
refs.body.style.backgroundColor = getRandomHexColor();
 });



 function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}




