// Напиши скрипт, который для каждого элемента массива ingredients:

// Создаст отдельный элемент <li>. Обзательно используй метод document.createElement().
// Добавит название ингредиента как его текстовое содержимое.
// Добавит элементу класс item.
// После чего вставит все <li> за одну операцию в список ul.ingredients.



const ingredients = [
  'Potatoes',
  'Mushrooms',
  'Garlic',
  'Tomatos',
  'Herbs',
  'Condiments',
];

const ingredientList = document.querySelector("#ingredients")
console.log(ingredientList);

const ingredientItemsRef = options =>{
  
  return options.map(element => {

    const newIngredientItems = document.createElement('li');
    newIngredientItems.classList.add('item');
    newIngredientItems.textContent = element;
  
    return newIngredientItems;
  
  });
}


const elements = ingredientItemsRef (ingredients)
ingredientList.append(...elements);
