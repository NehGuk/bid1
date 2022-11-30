import { fetchMetdhods } from "../api/fetch-methods.mjs";
const { updateAvatarOption } = fetchMetdhods;

export async function setNewAvatar(url, avatarObject) {
  console.log("Sending new avatarrrrrrrrr");

  updateAvatarOption.body = JSON.stringify(avatarObject);
  console.log(updateAvatarOption);

  const response = await fetch(url, updateAvatarOption);
  const json = await response.json();
  location.href = "/my-account.html";
}
