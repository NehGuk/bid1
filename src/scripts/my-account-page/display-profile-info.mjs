const userName = localStorage.getItem("name");
const userAvatar = localStorage.getItem("avatar");
const userEmail = localStorage.getItem("email");
const userCredits = localStorage.getItem("credits");

const userAvatarContainer = document.querySelector("#user-avatar-container");
userAvatarContainer.innerHTML = `<img src="${userAvatar}" class="rounded-circle border border-dark" style="width: 200px; height: 200px; object-fit: cover; border-width: 4px !important;" id="profile-avatar" alt=""></img>;`;

const userProfileInfo = document.querySelector("#user-profile-info");
userProfileInfo.innerHTML = `
    <p class="text-center" id="user-name"><b>Name: </b>${userName}</p>
    <p class="text-center" id="user-email"><b>Email: </b>${userEmail}</p>  
    <p class="text-center" id="user-credits"><b>Credits: </b>1000</p>  
`;
