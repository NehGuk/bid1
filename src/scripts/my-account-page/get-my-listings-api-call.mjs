import { displayMyListings } from "./get-my-listings-display.mjs";

import { getListingsByProfileURL } from "../api/api-base-urls.mjs";
const userName = localStorage.getItem("name");
const myListingsURL = getListingsByProfileURL(userName);

import { fetchMetdhods } from "../api/fetch-methods.mjs";
const { getListings } = fetchMetdhods;

async function getMyListings() {
  const response = await fetch(myListingsURL, getListings);
  const json = await response.json();
  displayMyListings(json);
}
getMyListings();
