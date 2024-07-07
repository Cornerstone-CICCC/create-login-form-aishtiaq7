document.addEventListener("DOMContentLoaded", () => {
  const email = document.getElementById("email");
  const password = document.getElementById("password");
  const form = document.getElementById("form");
  const checkbox = document.getElementById("checkbox");
  const togglePasswordVisibility = document.querySelector(
    ".toggle-password-visibility"
  );

  //email focus
  email.addEventListener("focus", (event) => {
    event.target.closest(".input-wrapper").classList.add("focus");
  });
  email.addEventListener("blur", (event) => {
    event.target.closest(".input-wrapper").classList.remove("focus");
  });

  //password focus
  password.addEventListener("focus", (event) => {
    event.target.closest(".password-wrapper").classList.add("focus");
  });
  password.addEventListener("blur", (event) => {
    event.target.closest(".password-wrapper").classList.remove("focus");
  });

  //eye functionality
  togglePasswordVisibility.addEventListener("click", () => {
    password.focus();
    if (password.type === "password") {
      password.type = "text";
      togglePasswordVisibility.style.backgroundImage =
        "url('../images/eye.svg')"; // Optional: Change icon to eye-slash when visible
    } else {
      password.type = "password";
      togglePasswordVisibility.style.backgroundImage =
        "url('../images/eye-closed.svg')"; // Change back to eye icon
    }
  });

  //form submission
  form.addEventListener("submit", (e) => {
    e.preventDefault();
    const loginData = {
      email: email.value,
      password: password.value,
      remindMe: checkbox.checked,
    };

    if (loginData.email.length === 0 || loginData.password.length === 0) {
      return;
    } else {
      email.value = "";
      password.value = "";
      checkbox.checked = false;

      console.log("loginData:", loginData);
    }
  });
});
