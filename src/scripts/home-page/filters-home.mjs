import { allListingsDESC } from "../api/api-base-urls.mjs";
import { allListingsASC } from "../api/api-base-urls.mjs";

import { fetchListings } from "./home-api-call.mjs";

const newestFirstButton = document.querySelector("#newest-first-button");
const oldestFirstButton = document.querySelector("#oldest-first-button");

newestFirstButton.addEventListener("click", () => {
  console.log("Clickinnnngggg newest first");
  newestFirstButton.classList.add("active");
  oldestFirstButton.classList.remove("active");
  console.log(allListingsDESC);
  fetchListings(allListingsDESC);
});

oldestFirstButton.addEventListener("click", () => {
  oldestFirstButton.classList.add("active");
  newestFirstButton.classList.remove("active");
  console.log(allListingsASC);
  fetchListings(allListingsASC);
});
