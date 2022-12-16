export function updateListingOnAPI(json) {
  console.log("UPDATING LISTING ON THE API");
  console.log(json);

  const updateItemForm = document.querySelector("#update-item-form");
  const updateButton = document.querySelector("#update-item-button");
  const errorMessage = document.querySelector("#error-message");
  errorMessage.style.display = "none";

  updateItemForm.addEventListener("submit", (event) => {
    event.preventDefault();
    console.log("Button UPDATE clicked!");
  });
}
