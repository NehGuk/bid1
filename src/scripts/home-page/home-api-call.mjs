import { allListingsDESC } from "../api/api-base-urls.mjs";
import { fetchMetdhods } from "../api/fetch-methods.mjs";
import { showEditorPicks } from "./editors-pick.mjs";
const { getListing } = fetchMetdhods;

import { displayListingsHome } from "./display-listings.mjs";

import { searchListingsHome } from "./search-bar.mjs";
import { clearSearchFieldHome } from "./search-bar.mjs";

export async function fetchListings(url, method) {
  try {
    const response = await fetch(url, getListing);
    const allListings = await response.json();
    displayListingsHome(allListings);
    showEditorPicks(allListings);
    searchListingsHome(allListings);
    clearSearchFieldHome(allListings);
  } catch (error) {
    console.log(error);
  }
}
fetchListings(allListingsDESC);
