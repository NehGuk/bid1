localStorage.clear();
import { fetchMetdhods } from "../api/fetch-methods.mjs";
const { loginUser } = fetchMetdhods;

export async function loginAuthUser(url, userCredentials) {
  loginUser.body = JSON.stringify(userCredentials);
  const response = await fetch(url, loginUser);
  const json = await response.json();

  if (response.status !== 200) {
    const errorMessage = document.querySelector("#error-message");
    errorMessage.style.display = "block";
    errorMessage.innerHTML = `${response.statusText}. Make sure your you have an <em>@stud.noroff.no</em> account and that your password is between 8 and 20 characters long.`;
  } else {
    const errorMessage = document.querySelector("#error-message");
    errorMessage.style.display = "none";

    // Adds data to localStorage
    localStorage.setItem("name", json.name);
    localStorage.setItem("email", json.email);
    localStorage.setItem("credits", json.credits);
    localStorage.setItem("avatar", json.avatar);
    localStorage.setItem("token", json.accessToken);

    // Directs user to account page
    location.href = "/my-account.html";
  }
}
