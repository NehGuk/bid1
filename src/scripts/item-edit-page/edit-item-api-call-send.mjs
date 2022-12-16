import { updateEntryURL } from "../api/api-base-urls.mjs";
import { fetchMetdhods } from "../api/fetch-methods.mjs";
const { updateEntry } = fetchMetdhods;

export function updateListingOnAPI(itemInfo) {
  const updateItemForm = document.querySelector("#update-item-form");
  const updateButton = document.querySelector("#update-item-button");
  const errorMessage = document.querySelector("#error-message");
  errorMessage.style.display = "none";

  updateItemForm.addEventListener("submit", (event) => {
    event.preventDefault();

    async function sendUpdatedListing(url, method) {
      const title = document.querySelector("#title");
      const description = document.querySelector("#description");
      const time = document.querySelector("#time");
      const media1 = document.querySelector("#media1");
      const media2 = document.querySelector("#media2");
      const media3 = document.querySelector("#media3");

      const updatedItemObject = {
        title: `${title.value}`,
        description: `${description.value}`,
        tags: [],
        media: [`${media1.value}`, `${media2.value}`, `${media3.value}`],
      };

      updateEntry.body = JSON.stringify(updatedItemObject);

      const response = await fetch(url, method);
      const json = await response.json();
    }
    sendUpdatedListing(updateEntryURL(itemInfo.id), updateEntry);
  });
}
