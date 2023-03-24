const loginForm = document.querySelector("form.login-form");
const inputFields = loginForm.querySelectorAll("input");

loginForm.addEventListener("submit", (e) => {
  e.preventDefault();

  const {
    elements: { email, password },
  } = e.currentTarget;

  if (email.value === "" || password.value === "") {
    return alert("Please, fill in all the fields!");
  }

  console.log({ email: email.value, password: password.value });
  e.currentTarget.reset();
});
