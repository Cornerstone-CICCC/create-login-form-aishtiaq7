document.addEventListener("DOMContentLoaded", () => {
    const email = document.getElementById("email");
    email.addEventListener("focus", (event) => {
      event.target.closest('.input-wrapper').classList.add('focus');
    });
    email.addEventListener("blur", (event) => {
      event.target.closest('.input-wrapper').classList.remove('focus');
    });
  });
  