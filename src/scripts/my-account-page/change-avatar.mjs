import { setNewAvatar } from "./change-avatar-api-call.mjs";

const changeAvatarForm = document.querySelector("#form-change-avatar");
const avatarUrlInput = document.querySelector("#avatar-media");
const changeAvatarButton = document.querySelector("#change-avatar-button");
const sendAvatarButton = document.querySelector("#send-avatar-button");

avatarUrlInput.style.display = "none";
changeAvatarButton.style.display = "inline-block";
sendAvatarButton.style.display = "none";

changeAvatarButton.addEventListener("click", (showAvatarInput) => {
  changeAvatarButton.style.display = "none";
  avatarUrlInput.style.display = "block";
  sendAvatarButton.style.display = "inline-block";
});

changeAvatarForm.addEventListener("submit", (event) => {
  event.preventDefault();
  console.log(avatarUrlInput.value);
  setNewAvatar();
});
