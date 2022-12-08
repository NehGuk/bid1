import { loadUserCredits } from "../navbar-logged-in/navbar-credits-avatar.mjs";

export async function sendBidToAPI(url, method) {
  const response = await fetch(url, method);
  const json = await response.json();
  if (response.status === 200) {
    const bidForm = document.querySelector("#bid-form");
    const bidAmount = document.querySelector("#bid-amount");
    bidForm.innerHTML = `
        <h2><strong>${bidAmount.value}</strong> credits</h2>
        <button type="button" class="btn bg-primary mt-2 px-3 py-2 text-white" id="bid-higher-button" onclick="window.location.reload()"><strong>Bid even higher</strong></button>
    `;
    loadUserCredits();
  } else {
    const errorMessage = document.querySelector("#error-message");
    errorMessage.style.display = "block";
    errorMessage.innerText = `${json.errors[0].message}`;
  }
}
