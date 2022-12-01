import { clearLocalStorage } from "../clear-local-storage.mjs";
clearLocalStorage();

import { allListingsLoggedOutURL } from "../api/api-base-urls.mjs";
import { displayListingsLoggedOut } from "./display-listings-logged-out.mjs";

export async function fetchListingsLoggedOut(url) {
  try {
    const response = await fetch(allListingsLoggedOutURL);
    const allListings = await response.json();
    displayListingsLoggedOut(allListings);
  } catch (error) {
    console.log(error);
  }
}
fetchListingsLoggedOut();
