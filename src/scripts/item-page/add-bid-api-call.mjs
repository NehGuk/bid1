export async function sendBidToAPI(url, method) {
  const response = await fetch(url, method);
  const json = await response.json();
  if (response.status === 200) {
    location.reload();
  } else {
    const errorMessage = document.querySelector("#error-message");
    errorMessage.style.display = "block";
    errorMessage.innerText = `${json.errors[0].message}`;
  }
}
