import { allListingsDESC } from "../api/api-base-urls.mjs";
import { allListingsASC } from "../api/api-base-urls.mjs";
import { fetchMetdhods } from "../api/fetch-methods.mjs";
const { getListing } = fetchMetdhods;

import { displayListingsHome } from "./display-listings.mjs";

export async function fetchListings(url, method) {
  try {
    const response = await fetch(allListingsDESC, getListing);
    const allListings = await response.json();
    displayListingsHome(allListings);
  } catch (error) {
    console.log(error);
  }
}
fetchListings();
