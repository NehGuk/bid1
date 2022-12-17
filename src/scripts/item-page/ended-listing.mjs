export function displayEndedMessage(itemInfo) {
  const placeYourBidSection = document.querySelector("#place-your-bid-section");
  const now = new Date();
  const listingEndsAt = new Date(itemInfo.endsAt);

  if (now > listingEndsAt) {
    placeYourBidSection.innerHTML = `
        <div class="text-center mt-2">
            <h3 class="">Too late!</h3>
            <p class="">This listing has already ended.</p>
            <a href="#"><button class="btn btn-primary my-3">Try something else</button></a>
        </div>
    `;
  }
}
