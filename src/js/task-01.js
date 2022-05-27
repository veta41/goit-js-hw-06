//Напиши скрипт который:

// Посчитает и выведет в консоль количество категорий в ul#categories, то есть элементов li.item.
// Для каждого элемента li.item в списке ul#categories, найдет и выведет в консоль текст заголовка элемента (тега <h2>) и количество элементов в категории (всех вложенных в него <li>).


const categories = document.querySelector('#categories');
console.log(categories);
const categorieRef = categories.children;
console.log(categorieRef);
 console.log(`Number of categories: ${categorieRef.length}`);

 




const totalCategorie = (categories.querySelectorAll(".item")).forEach(element => {
  console.log(`Category: ${categories.querySelector("h2").textContent}`);
  console.log(`Elements: ${categories.querySelectorAll("li").length}`);
});


