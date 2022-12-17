import { clearLocalStorage } from "../clear-local-storage.mjs";
clearLocalStorage();

import { allListingsDESC } from "../api/api-base-urls.mjs";
import { displayListingsLoggedOut } from "./display-listings-logged-out.mjs";
import { searchListings } from "./search-bar.mjs";
import { clearSearchField } from "./search-bar.mjs";

export async function fetchListingsLoggedOut(url) {
  try {
    const response = await fetch(url);
    const allListings = await response.json();

    displayListingsLoggedOut(allListings);
    searchListings(allListings);
    clearSearchField(allListings);
  } catch (error) {
    console.log(error);
  }
}
fetchListingsLoggedOut(allListingsDESC);
