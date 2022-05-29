// Напиши скрипт управления формой логина.

// Обработка отправки формы form.login-form должна быть по событию submit.
// При отправке формы страница не должна перезагружаться.
// Если в форме есть незаполненные поля, выводи alert с предупреждением о том, что все поля должны быть заполнены.
// Если пользователь заполнил все поля и отправил форму, собери значения полей в обьект, где имя поля будет именем свойства, а значение поля - значением свойства. Для доступа к элементам формы используй свойство elements.
// Выведи обьект с введенными данными в консоль и очисти значения полей формы методом reset.


   const formBtn = document.querySelector(".login-form");

    formBtn.addEventListener("submit", (event) => {
     event.preventDefault();

     const {
      elements: { email, password }
    } = event.currentTarget;

   
    const users = {
      email: '',
      password: '',

    }
  

     if (email.value === "" || password.value === "")
      {
        alert("Внимание! Все поля должны быть заполнены!");
      
      } else {
        
          users.email = email.value;
          users.password = password.value;
     
     
      }
  
     event.currentTarget.reset();

     console.log(users);
      });

