import { allListingsDESC } from "../api/api-base-urls.mjs";
import { fetchMetdhods } from "../api/fetch-methods.mjs";
const { getListing } = fetchMetdhods;
import { showEditorPicks } from "./editors-pick.mjs";
import { editorsChoiceArray } from "./editors-pick-array.mjs";
import { displayListingsHome } from "./display-listings.mjs";
import { searchListingsHome } from "./search-bar.mjs";
import { clearSearchFieldHome } from "./search-bar.mjs";

export async function fetchListings(url, method) {
  try {
    const response = await fetch(url, getListing);
    const allListings = await response.json();
    showEditorPicks(editorsChoiceArray);
    displayListingsHome(allListings);
    searchListingsHome(allListings);
    clearSearchFieldHome(allListings);
  } catch (error) {
    console.log(error);
  }
}
fetchListings(allListingsDESC);
