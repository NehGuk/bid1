import { fetchMetdhods } from "../api/fetch-methods.mjs";
const { updateAvatarOption } = fetchMetdhods;

export async function setNewAvatar(url, avatarObject) {
  updateAvatarOption.body = JSON.stringify(avatarObject);
  const response = await fetch(url, updateAvatarOption);
  const json = await response.json();
  location.href = "/my-account.html";
}
