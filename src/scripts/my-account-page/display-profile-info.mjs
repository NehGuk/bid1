const userName = localStorage.getItem("name");
const userAvatar = localStorage.getItem("avatar");
const userEmail = localStorage.getItem("email");
const userCredits = localStorage.getItem("credits");

function showUserAvatar() {
  if (!userAvatar) {
    const userAvatarContainer = document.querySelector(
      "#user-avatar-container"
    );
    userAvatarContainer.innerHTML = `<img src="/assets/sample-image.png" class="rounded-circle border border-dark" style="width: 200px; height: 200px; object-fit: cover; border-width: 4px !important;" id="profile-avatar" alt=""></img>`;
  } else {
    const userAvatarContainer = document.querySelector(
      "#user-avatar-container"
    );
    userAvatarContainer.innerHTML = `<img src="${userAvatar}" class="rounded-circle border border-dark" style="width: 150px; height: 150px; object-fit: cover; border-width: 4px !important;" id="profile-avatar" alt=""></img>`;
  }
}
showUserAvatar();

function showUserInfo() {
  const userProfileInfo = document.querySelector("#user-profile-info");
  userProfileInfo.innerHTML = `
    <p class="text-center" id="user-name"><b>Name: </b>${userName}</p>
    <p class="text-center" id="user-email"><b>Email: </b>${userEmail}</p>  
    <p class="text-center" id="user-credits"><b>Credits: </b>${userCredits}</p>  
`;
}
showUserInfo();

function redirectsIfLoggedOut() {
  if (!userName) {
    location.href = "/index.html";
  }
}
redirectsIfLoggedOut();
