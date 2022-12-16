import { allListingsDESC } from "../api/api-base-urls.mjs";
import { allListingsASC } from "../api/api-base-urls.mjs";
import { fetchMetdhods } from "../api/fetch-methods.mjs";
import { showEditorPick } from "./editors-pick.mjs";
const { getListing } = fetchMetdhods;

import { displayListingsHome } from "./display-listings.mjs";

export async function fetchListings(url, method) {
  try {
    const response = await fetch(url, getListing);
    const allListings = await response.json();
    displayListingsHome(allListings);
    showEditorPick(allListings);
  } catch (error) {
    console.log(error);
  }
}
fetchListings(allListingsDESC);
