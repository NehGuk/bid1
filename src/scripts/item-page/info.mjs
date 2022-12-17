import { showEditButton } from "./own-item-hidden-bid.mjs";
import { displayEndedMessage } from "./ended-listing.mjs";

export function displayItemInfo(itemInfo) {
  const itemName = document.querySelector("#item-name");
  itemName.innerHTML = `
    <h1 class="text-center mt-5">${itemInfo.title}</h1>
  `;

  const formattedDeadlineDate = new Date(itemInfo.endsAt).toLocaleDateString("en-us", {
    year: "numeric",
    month: "short",
    day: "numeric",
  });
  const formattedDeadlineTime = new Date(itemInfo.endsAt).toLocaleTimeString("en-GB", {
    hour: "2-digit",
    minute: "2-digit",
  });

  const formattedCreatedDate = new Date(itemInfo.created).toLocaleDateString("en-us", {
    year: "numeric",
    month: "short",
    day: "numeric",
  });
  const formattedCreatedTime = new Date(itemInfo.created).toLocaleTimeString("en-GB", {
    hour: "2-digit",
    minute: "2-digit",
  });

  const itemDetails = document.querySelector("#item-info");
  itemDetails.innerHTML = `
  <h2 class="mt-3 mb-1">Description</h2>
        <p>${itemInfo.description}</p>
        <p><strong>OWNER | </strong>${itemInfo.seller.name}</p>
        <p><strong class="text-dark">DATE ADDED | </strong>${formattedCreatedDate}<span class="small text-muted">, ${formattedCreatedTime}</span></p>
        <p><strong>ENDS AT | </strong>${formattedDeadlineDate}<span class="small text-muted">, ${formattedDeadlineTime}</span></p>
  `;

  function enableUserToEditOwnEntry() {
    const userName = localStorage.getItem("name");
    if (userName === itemInfo.seller.name) {
      showEditButton(itemInfo);
    }
  }
  enableUserToEditOwnEntry();

  displayEndedMessage(itemInfo);
}
