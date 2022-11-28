export function displayListingsLoggedOut(allListings) {
  const listingsContainer = document.querySelector("#listingsContainer");
  listingsContainer.innerHTML = ``;

  for (let i = 0; i < allListings.length; i++) {
    if (!allListings[i].media) {
      allListings[i].media = "/assets/sample-image.png";
    }

    if (!allListings[i].description) {
      allListings[i].description =
        "Check out this item and place your bid before you regret it!";
    }

    listingsContainer.innerHTML += `
        <div class="col">
              <div class="card h-100">
                <img src="${allListings[i].media[0]}" class="card-img-top" alt="Image description">
                <div class="card-body">
                  <h3 class="card-title">${allListings[i].title}</h3>
                  <p class="card-text">${allListings[i].description}</p>
                  <p><strong>Bids: </strong>${allListings[i].bids.length}</p>
                  <p><strong>Ends at: </strong>${allListings[i].endsAt}</p>
                  <a href="/signup.html"><button class="btn btn-primary px-4">Bid now</button></a>
                </div>
              </div>
            </div>
        `;
  }
}
