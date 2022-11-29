console.log("Access script right");

const loginForm = document.querySelector("#login-form");
const errorMessage = document.querySelector("#error-message");
errorMessage.style.display = "none";

loginForm.addEventListener("submit", (event) => {
  event.preventDefault();
  console.log("Yaaaayyyy");
});
