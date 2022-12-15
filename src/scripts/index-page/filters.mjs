import { allListingsDESC } from "../api/api-base-urls.mjs";
import { allListingsASC } from "../api/api-base-urls.mjs";

import { fetchListingsLoggedOut } from "./index-api-call.mjs";

console.log("Filteringgg nooooooow");

const newestFirstButton = document.querySelector("#newest-first-button");
const oldestFirstButton = document.querySelector("#oldest-first-button");

newestFirstButton.addEventListener("click", () => {
  console.log("Clickinnnngggg newest first");
  newestFirstButton.classList.add("active");
  oldestFirstButton.classList.remove("active");
  console.log(allListingsDESC);
  fetchListingsLoggedOut(allListingsDESC);
});

oldestFirstButton.addEventListener("click", () => {
  console.log("Clickinnnngggg oldest first");
  oldestFirstButton.classList.add("active");
  newestFirstButton.classList.remove("active");
  console.log(allListingsASC);
  fetchListingsLoggedOut(allListingsASC);
});
