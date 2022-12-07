const queryString = window.location.search;
const urlParams = new URLSearchParams(queryString);
const listingID = urlParams.get("id");
console.log(listingID);

import { sendBidURL } from "../api/api-base-urls.mjs";
const bidItemURL = sendBidURL(listingID);
console.log(bidItemURL);

import { fetchMetdhods } from "../api/fetch-methods.mjs";
const { sendBidMethod } = fetchMetdhods;

import { sendBidToAPI } from "./add-bid-api-call.mjs";

const bidButton = document.querySelector("#bid-button");
const bidAmount = document.querySelector("#bid-amount");
console.log(typeof bidAmount);

bidButton.addEventListener("click", (event) => {
  event.preventDefault();
  sendBidMethod.body = JSON.stringify({
    amount: bidAmount.valueAsNumber,
  });
  sendBidToAPI(sendBidURL(listingID), sendBidMethod);
});
