function loadUserAvatar() {
  const avatarURLContainer = document.querySelector("#avatar-nav");
  const avatarURL = localStorage.getItem("avatar");
  avatarURLContainer.src = avatarURL;

  // if no avatar, use default avatar image
  if (!avatarURL) {
    avatarURLContainer.src = "/assets/sample-image.png";
  }
}
loadUserAvatar();

import { getProfileURL } from "../api/api-base-urls.mjs";
import { fetchMetdhods } from "../api/fetch-methods.mjs";
export async function loadUserCredits() {
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
}
loadUserCredits();
