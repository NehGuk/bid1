const queryString = window.location.search;
const urlParams = new URLSearchParams(queryString);
const itemID = urlParams.get("id");

import { getListingURL } from "../api/api-base-urls.mjs";
import { fetchMetdhods } from "../api/fetch-methods.mjs";
const { getListing } = fetchMetdhods;
import { prefillUpdateForm } from "./edit-item-prefill-form.mjs";
import { updateListingOnAPI } from "./edit-item-api-call-send.mjs";

async function getItemInfo(url, method) {
  try {
    const response = await fetch(url, method);
    const json = await response.json();
    prefillUpdateForm(json);
    updateListingOnAPI(json);
  } catch (error) {
    console.log(error);
  }
}
getItemInfo(getListingURL(itemID), getListing);
