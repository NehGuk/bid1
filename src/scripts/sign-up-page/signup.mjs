localStorage.clear();
import { registerNewUser } from "./signup-api-call.mjs";
import { registerUserURL } from "../api/api-base-urls.mjs";

const signUpForm = document.querySelector("#signupform");
const errorMessage = document.querySelector("#error-message");
errorMessage.style.display = "none";

signUpForm.addEventListener("submit", (event) => {
  event.preventDefault();
  // Create object from form input fields
  const myFormData = new FormData(event.target);
  const newUserObject = Object.fromEntries(myFormData.entries());

  // Register new user in API
  registerNewUser(registerUserURL, newUserObject);
});
