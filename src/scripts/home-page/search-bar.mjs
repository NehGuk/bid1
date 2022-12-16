const searchInput = document.querySelector("#search-input");
const searchClearButton = document.querySelector("#search-clear-button");
const statusMessageContainer = document.querySelector("#status-container");

import { displayListingsHome } from "./display-listings.mjs";

export function searchListingsHome(allListings) {
  searchInput.addEventListener("input", (event) => {
    let value = event.target.value;
    let filteredArray = [];

    for (let i = 0; i < allListings.length; i++) {
      let currentPost = allListings[i];

      if (
        currentPost.title.toLowerCase().includes(value.toLowerCase()) ||
        currentPost.description.toLowerCase().includes(value.toLowerCase())
      ) {
        filteredArray.push(currentPost);
        statusMessageContainer.innerHTML = ``;
      } else if (filteredArray.length === 0) {
        statusMessageContainer.style.display = "block";
        statusMessageContainer.innerHTML = `
            <p class="">Oops! No items match the search terms</p>
              `;
      }
    }
    displayListingsHome(filteredArray);
  });
}

export function clearSearchFieldHome(allListings) {
  searchClearButton.addEventListener("click", () => {
    searchInput.value = "";
    statusMessageContainer.innerHTML = ``;
    displayListingsHome(allListings);
  });
}
