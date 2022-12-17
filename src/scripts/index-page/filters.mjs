import { allListingsDESC } from "../api/api-base-urls.mjs";
import { allListingsASC } from "../api/api-base-urls.mjs";
import { fetchListingsLoggedOut } from "./index-api-call.mjs";

const newestFirstButton = document.querySelector("#newest-first-button");
const oldestFirstButton = document.querySelector("#oldest-first-button");

newestFirstButton.addEventListener("click", () => {
  newestFirstButton.classList.add("active");
  oldestFirstButton.classList.remove("active");
  fetchListingsLoggedOut(allListingsDESC);
});

oldestFirstButton.addEventListener("click", () => {
  oldestFirstButton.classList.add("active");
  newestFirstButton.classList.remove("active");
  fetchListingsLoggedOut(allListingsASC);
});
