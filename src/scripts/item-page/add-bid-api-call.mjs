export async function sendBidToAPI(url, method) {
  const response = await fetch(url, method);
  const json = await response.json();
  location.reload();
}
