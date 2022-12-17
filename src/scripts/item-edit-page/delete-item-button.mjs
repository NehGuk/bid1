const deleteLink = document.querySelector("#delete-item-link");
const deleteButton = document.querySelector("#delete-item-button");
const cancelButton = document.querySelector("#cancel-button");

import { deleteFromAPI } from "./delete-item-api-call.mjs";
import { deleteEntryURL } from "../api/api-base-urls.mjs";
import { fetchMetdhods } from "../api/fetch-methods.mjs";
const { deleteEntry } = fetchMetdhods;

deleteButton.style.display = "none";
cancelButton.style.display = "none";

export function deleteItem(itemInfo) {
  deleteLink.addEventListener("click", () => {
    deleteButton.style.display = "block";
    cancelButton.style.display = "block";

    function confirmDelete() {
      deleteButton.addEventListener("click", () => {
        deleteFromAPI(deleteEntryURL(itemInfo.id), deleteEntry);
      });
    }
    confirmDelete();

    function cancelDeletion() {
      cancelButton.addEventListener("click", () => {
        deleteButton.style.display = "none";
        cancelButton.style.display = "none";
      });
    }
    cancelDeletion();
  });
}
