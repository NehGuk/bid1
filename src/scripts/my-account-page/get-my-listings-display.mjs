export function displayMyListings(myListings) {
  const cardsContainer = document.querySelector("#cards-container");
  cardsContainer.innerHTML = ``;

  for (let i = 0; i < myListings.length; i++) {
    const formattedPostDate = new Date(myListings[i].created).toLocaleDateString("en-us", {
      month: "short",
      day: "numeric",
    });
    const formattedPostTime = new Date(myListings[i].created).toLocaleTimeString("en-GB", { hour: "2-digit", minute: "2-digit" });

    const formattedDeadlineDate = new Date(myListings[i].endsAt).toLocaleDateString("en-us", { month: "short", day: "numeric" });
    const formattedDeadlineTime = new Date(myListings[i].endsAt).toLocaleTimeString("en-GB", { hour: "2-digit", minute: "2-digit" });

    cardsContainer.innerHTML += `
        <div class="col p-3">
                <div class="card h-100 border-1 bg-light border-0 ">
                    <a href="/item.html?id=${myListings[i].id}"><img src="${myListings[i].media[0]}" class="card-img-top" style="height: 15rem; object-fit: cover" alt="Image caption: ${myListings[i].title}"></a>
                    <div class="card-body">
                    <a href="/item.html?id=${myListings[i].id}" class="text-decoration-none"><h3 class="card-title pb-0">${myListings[i].title}</h3></a>
                    <p class="card-text">${myListings[i].description}</p>
                    
                    </div>
                    <div class="card-footer bg-light border-0 pt-0 mt-0">
                    <hr>
                    <p class="mb-0"><strong>Bids: </strong>${myListings[i].bids.length}</p>
                    <p class="mb-0"><strong>Created: </strong>${formattedPostDate} <span class="small text-muted">| ${formattedPostTime}</span></p>
                    <p class="mb-3"><strong>Ends at: </strong>${formattedDeadlineDate} <span class="small text-muted">| ${formattedDeadlineTime}</span></p>
                    <a href="/item.html?id=${myListings[i].id}"><button class="btn btn-primary px-4 mb-2"><strong>Open</strong></button></a>
                    </div>
                </div>
                </div>
        
        `;
  }
}
