document.addEventListener("DOMContentLoaded", () => {
    const email = document.getElementById("email");
    const password = document.getElementById("password");
    const togglePasswordVisibility = document.querySelector(".toggle-password-visibility");
  
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

    //eye functionality 
    togglePasswordVisibility.addEventListener("click", () => {
        password.focus();
        if (password.type === "password") {
          password.type = "text";
          togglePasswordVisibility.style.backgroundImage = "url('../images/eye.svg')"; // Optional: Change icon to eye-slash when visible
        } else {
          password.type = "password";
          togglePasswordVisibility.style.backgroundImage = "url('../images/eye-closed.svg')"; // Change back to eye icon
        }
      });
  });
  