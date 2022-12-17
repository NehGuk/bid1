import { fetchMetdhods } from "../api/fetch-methods.mjs";
const { updateAvatarOption } = fetchMetdhods;

export async function setNewAvatar(url, avatarObject) {
  try {
    updateAvatarOption.body = JSON.stringify(avatarObject);
    const response = await fetch(url, updateAvatarOption);
    const json = await response.json();
    localStorage.setItem("avatar", json.avatar);
    location.href = "/my-account.html";
  } catch (error) {
    console.log(error);
  }
}
