document.addEventListener("DOMContentLoaded", () => {
    const email = document.getElementById("email");
    const password = document.getElementById("password");
  
    //email focus 
    email.addEventListener("focus", (event) => {
      event.target.closest('.input-wrapper').classList.add('focus');
    });
    email.addEventListener("blur", (event) => {
      event.target.closest('.input-wrapper').classList.remove('focus');
    });
  
    //password focus 
    password.addEventListener("focus", (event) => {
      event.target.closest('.password-wrapper').classList.add('focus');
    });
    password.addEventListener("blur", (event) => {
      event.target.closest('.password-wrapper').classList.remove('focus');
    });
  });
  