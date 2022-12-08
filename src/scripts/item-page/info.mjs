import { showEditiOptions } from "./own-item-hidden-bid.mjs";

export function displayItemInfo(itemInfo) {
  const itemName = document.querySelector("#item-name");
  itemName.innerHTML = `
    <h1 class="text-center">${itemInfo.title}</h1>
  `;

  const formattedDeadlineDate = new Date(itemInfo.endsAt).toLocaleDateString(
    "en-us",
    {
      month: "short",
      day: "numeric",
    }
  );
  const formattedDeadlineTime = new Date(itemInfo.endsAt).toLocaleTimeString(
    "en-GB",
    {
      hour: "2-digit",
      minute: "2-digit",
    }
  );

  const formattedCreatedDate = new Date(itemInfo.created).toLocaleDateString(
    "en-us",
    {
      month: "short",
      day: "numeric",
    }
  );
  const formattedCreatedTime = new Date(itemInfo.created).toLocaleTimeString(
    "en-GB",
    {
      hour: "2-digit",
      minute: "2-digit",
    }
  );

  const itemDetails = document.querySelector("#item-info");
  itemDetails.innerHTML = `
  <h2 class="mt-3 mb-1">Description</h2>
        <p>${itemInfo.description}</p>
        <p><strong>Owner: </strong>${itemInfo.seller.name}</p>
        <p><strong>Date added: </strong>${formattedCreatedDate}, <span class="small">${formattedCreatedTime}</span></p>
        <p><strong>Deadline: </strong>${formattedDeadlineDate}, <span class="small">${formattedDeadlineTime}</span></p>
  `;

  function enableUserToEditOwnEntry() {
    const userName = localStorage.getItem("name");
    if (userName === itemInfo.seller.name) {
      showEditiOptions();
    }
  }
  enableUserToEditOwnEntry();
}
