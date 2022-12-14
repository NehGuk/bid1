export function showEditorPick(allListings) {
  const editorPickInfo = document.querySelector("#editor-pick-info");
  const editorPickImage = document.querySelector("#editor-pick-image");
  editorPickImage.src = allListings[9].media;

  const bidDeadline = new Date(allListings[9].endsAt);
  const formattedDate = bidDeadline.toLocaleDateString("en-us", {
    month: "short",
    day: "numeric",
  });
  const formattedTime = bidDeadline.toLocaleTimeString("en-GB", {
    hour: "2-digit",
    minute: "2-digit",
  });

  editorPickInfo.innerHTML = `
    <a href="/item.html?id=${allListings[9].id}" class="text-decoration-none"><h1 class="card-title">${allListings[9].title}</h1></a>
    <p class="card-text">${allListings[9].description}</p>
    <hr style="width: 66%">
    <p class="mb-0"><strong>Bids: </strong>${allListings[9].bids.length}</p>
    <p class="mb-3"><strong>Ends at: </strong>${formattedDate}, <span class="small">${formattedTime}</span></p>
    <a href="/item.html?id=${allListings[9].id}"><button class="btn btn-primary px-4 mb-2">Bid now</button></a>
  
  `;
}
