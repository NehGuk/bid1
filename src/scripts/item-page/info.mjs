export function displayItemInfo(itemInfo) {
  console.log("Displaying item info");
  console.log(itemInfo.title);
  console.log(itemInfo.description);
  console.log(itemInfo.endsAt);
  console.log(itemInfo.seller.name);
  console.log(itemInfo.bids.length);
  console.log(itemInfo.bids[0].amount);
  console.log(itemInfo.bids[0].bidderName);
  console.log(itemInfo.bids[0].created);

  const itemName = document.querySelector("#item-name");
  itemName.innerHTML = `
    <h1 class="text-center">${itemInfo.title}</h1>
  `;

  const itemDetails = document.querySelector("#item-info");
  itemDetails.innerHTML = `
  <h2 class="mt-3 mb-1">Description</h2>
        <p>${itemInfo.description}</p>
        <p><strong>Owner: </strong>${itemInfo.seller.name}</p>
        <p><strong>Deadline: </strong>${itemInfo.endsAt}</p>
  `;
}
