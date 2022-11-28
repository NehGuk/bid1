export function displayListingsLoggedOut(allListings) {
  const listingsContainer = document.querySelector("#listingsContainer");
  listingsContainer.innerHTML = ``;

  for (let i = 0; i < allListings.length; i++) {
    if (allListings[i].media.length === 0) {
      allListings[i].media = ["/assets/sample-image.png"];
    }

    if (!allListings[i].description) {
      allListings[i].description =
        "Check out this item and place your bid before you regret it!";
    }

    const formattedDate = new Date(allListings[i].endsAt).toLocaleDateString(
      "en-us",
      { month: "short", day: "numeric" }
    );
    const formattedTime = new Date(allListings[i].endsAt).toLocaleTimeString(
      "en-GB"
    );

    listingsContainer.innerHTML += `
        <div class="col">
              <div class="card h-100">
                <img src="${allListings[i].media[0]}" class="card-img-top" style="height: 20rem; object-fit: cover" alt="Image caption: ${allListings[i].title}">
                <div class="card-body mb-0">
                  <h3 class="card-title mb-0 pb-0">${allListings[i].title}</h3>
                  <hr>
                  <p class="card-text mt-0">${allListings[i].description}</p>
                  <p class="mb-0"><strong>Bids: </strong>${allListings[i].bids.length}</p>
                  <p class="mb-0"><strong>Ends at: </strong>${formattedDate}, ${formattedTime}</p>
                </div>
                <div class="card-footer bg-light border-0 pt-0 mt-0">
                  <a href="/signup.html"><button class="btn btn-primary px-4">Bid now</button></a>
                  </div>
              </div>
            </div>
        `;
  }
}
