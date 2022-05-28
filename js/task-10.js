// Напиши скрипт создания и очистки коллекции элементов. Пользователь вводит количество элементов в input и нажимает кнопку Создать, после чего рендерится коллекция. При нажатии на кнопку Очистить, коллекция элементов очищается.

// Создай функцию createBoxes(amount), которая принимает один параметр - число. Функция создает столько <div>, сколько указано в amount и добавляет их в div#boxes.

// Размеры самого первого <div> - 30px на 30px.
// Каждый элемент после первого, должен быть шире и выше предыдущего на 10px.
// Все элементы должены иметь случайный цвет фона в формате HEX. Используй готовую функцию getRandomHexColor для получения цвета.

// Создай функцию destroyBoxes(), которая очищает содержимое div#boxes, тем самым удаляя все созданные элементы.



function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}

const refs = {

   input : document.querySelector('#controls input'),
   createBtn : document.querySelector('[data-create]'),
   destroyBtn : document.querySelector('[data-destroy]'),
   boxesContainer : document.querySelector('#boxes'),
  

}

refs.createBtn.addEventListener('click', () => createBoxes(refs.input.value));
refs.destroyBtn.addEventListener('click', destroyBoxes);



function createBoxes(amount) {
  const boxesEl = [];
  let baseboxSize = 30;
  for (let i = 0; i < amount; i += 1 ) {
    const newBox = document.createElement('div');
    newBox.classList.add("new-box");
    newBox.style.width = `${baseboxSize}px`;
    newBox.style.height = `${baseboxSize}px`;
    newBox.style.backgroundColor = getRandomHexColor();
    boxesEl.push(newBox);
    baseboxSize += 10;
  }
  refs.boxesContainer.append(...boxesEl);
}

function destroyBoxes () {
   refs.boxesContainer.innerHTML = '';
   
}