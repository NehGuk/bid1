console.log("Adding bidddddd");

const bidButton = document.querySelector("#bid-button");
const bidAmount = document.querySelector("#bid-amount");

console.log(bidButton);

bidButton.addEventListener("click", (event) => {
  event.preventDefault();
  console.log("Clicked");
  console.log(bidAmount.value);
  console.log(location);
  console.log(location.href);
});
