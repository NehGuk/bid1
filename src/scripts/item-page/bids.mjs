export function displayBids(itemInfo) {
  for (let i = 0; i < itemInfo.length; i++) {
    const formattedDate = new Date(itemInfo[i].created).toLocaleDateString(
      "en-us",
      { month: "short", day: "numeric" }
    );
    const formattedTime = new Date(itemInfo[i].created).toLocaleTimeString(
      "en-GB"
    );

    const bidsContainer = document.querySelector("#bids-container");

    bidsContainer.innerHTML += `
        <div class="row mb-3">
            <div class="col">
                <p class="mb-1 bg-dark rounded p-3"><strong>${itemInfo[i].amount}</strong></p>
            </div>
            <div class="col text-start">
                <p class="mb-0 small"><strong>From: </strong>${itemInfo[i].bidderName}</p>
                <p class="mb-0 small"><strong>Date: </strong>${formattedDate}</p>  
                <p class="mb-0 small"><strong>Time: </strong>${formattedTime}</p>  
            </div>
        </div>
    `;
  }

  if (itemInfo.length === 0) {
    const bidsContainer = document.querySelector("#bids-container");
    bidsContainer.innerHTML = `
        <div class="row mb-3">
            <div class="col text-center">
              <p class="mb-1">Nothing yet! Be the first one to bid!</p>  
            </div>
        </div>
    `;
  }
}
