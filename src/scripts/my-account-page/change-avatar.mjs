const avatarUrlInput = document.querySelector("#avatar-media");
const changeAvatarButton = document.querySelector("#change-avatar-button");
const sendAvatarButton = document.querySelector("#send-avatar-button");

avatarUrlInput.style.display = "none";
changeAvatarButton.style.display = "inline-block";
sendAvatarButton.style.display = "none";

changeAvatarButton.addEventListener("click", showAvatarInput => {
    changeAvatarButton.style.display = "none";
    avatarUrlInput.style.display = "block";
    sendAvatarButton.style.display = "inline-block";
});