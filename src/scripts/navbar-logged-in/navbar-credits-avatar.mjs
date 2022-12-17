function loadUserAvatar() {
  const avatarNavURLContainer = document.querySelector("#avatar-nav");
  const avatarNavURL = localStorage.getItem("avatar");
  avatarNavURLContainer.src = avatarNavURL;

  if (avatarNavURL === "null") {
    avatarNavURLContainer.src = "/assets/sample-image.png";
  }
}
loadUserAvatar();

import { getProfileURL } from "../api/api-base-urls.mjs";
import { fetchMetdhods } from "../api/fetch-methods.mjs";
export async function loadUserCredits() {
  try {
    const userName = localStorage.getItem("name");
    const { getProfile } = fetchMetdhods;
    const response = await fetch(getProfileURL(userName), getProfile);
    const json = await response.json();
    const userCreditsContainer = document.querySelector(
      "#user-credits-container"
    );
    userCreditsContainer.innerHTML = `${json.credits}`;
    // send credits to localStorage
    localStorage.setItem("credits", json.credits);
  } catch (error) {
    console.log(error);
  }
}
loadUserCredits();
