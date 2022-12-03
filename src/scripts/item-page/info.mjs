export function displayItemInfo(itemInfo) {
  const itemName = document.querySelector("#item-name");
  itemName.innerHTML = `
    <h1 class="text-center">${itemInfo.title}</h1>
  `;

  const formattedDate = new Date(itemInfo.endsAt).toLocaleDateString("en-us", {
    month: "short",
    day: "numeric",
  });
  const formattedTime = new Date(itemInfo.endsAt).toLocaleTimeString("en-GB", {
    hour: "2-digit",
    minute: "2-digit",
  });

  const itemDetails = document.querySelector("#item-info");
  itemDetails.innerHTML = `
  <h2 class="mt-3 mb-1">Description</h2>
        <p>${itemInfo.description}</p>
        <p><strong>Owner: </strong>${itemInfo.seller.name}</p>
        <p><strong>Deadline: </strong>${formattedDate}, <span class="small">${formattedTime}</span></p>
  `;
}
