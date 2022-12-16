const queryString = window.location.search;
const urlParams = new URLSearchParams(queryString);
const itemID = urlParams.get("id");

import { prefillUpdateForm } from "./edit-item-prefill-form.mjs";
import { getListingURL } from "../api/api-base-urls.mjs";
import { fetchMetdhods } from "../api/fetch-methods.mjs";
const { getListing } = fetchMetdhods;

async function getItemInfo(url, method) {
  const response = await fetch(url, method);
  const json = await response.json();
  prefillUpdateForm(json);
}
getItemInfo(getListingURL(itemID), getListing);
