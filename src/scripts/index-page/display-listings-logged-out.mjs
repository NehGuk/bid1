export function displayListingsLoggedOut(allListings) {
  const listingsContainer = document.querySelector("#listingsContainer");
  listingsContainer.innerHTML = ``;

  for (let i = 0; i < allListings.length; i++) {
    if (allListings[i].media.length === 0) {
      allListings[i].media = ["/assets/sample-image.png"];
    }

    if (!allListings[i].description) {
      allListings[i].description = "Check out this item and place your bid before you regret it!";
    }

    const formattedCreatedDate = new Date(allListings[i].created).toLocaleDateString("en-us", { month: "short", day: "numeric" });
    const formattedCreatedTime = new Date(allListings[i].created).toLocaleTimeString("en-GB", { hour: "2-digit", minute: "2-digit" });

    const formattedDeadlineDate = new Date(allListings[i].endsAt).toLocaleDateString("en-us", { month: "short", day: "numeric" });
    const formattedDeadlineTime = new Date(allListings[i].endsAt).toLocaleTimeString("en-GB", { hour: "2-digit", minute: "2-digit" });

    listingsContainer.innerHTML += `
        <div class="col p-3">
              <div class="card h-100 border-0">
              <a href="/login.html"><img src="${allListings[i].media[0]}" class="card-img-top" style="height: 15rem; object-fit: cover" alt="Image caption: ${allListings[i].title}"></a>
                <div class="card-body bg-light">
                <a class="text-decoration-none" href="/login.html"><h3 class="card-title pb-0">${allListings[i].title}</h3></a>
                  <p class="card-text">${allListings[i].description}</p>
                  
                </div>
                <div class="card-footer bg-light border-0 pt-0 mt-0">
                <hr>
                  <p class="mb-0"><strong>Bids: </strong>${allListings[i].bids.length}</p>
                  <p class="mb-0"><strong>Created: </strong>${formattedCreatedDate}<span class="small text-muted">, ${formattedCreatedTime}</span></p>
                  <p class="mb-3"><strong>Ends at: </strong>${formattedDeadlineDate}<span class="small text-muted">, ${formattedDeadlineTime}</span></p>
                  <a href="/login.html"><button class="btn btn-primary" style="width: 50%"><strong>Bid now</strong></button></a>
                  </div>
              </div>
            </div>
        `;
  }
}
