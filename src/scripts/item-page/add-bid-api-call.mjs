export async function sendBidToAPI(url, method) {
  console.log("Sending bidddd, yeaaaaahhhh!");

  const response = await fetch(url, method);
  const json = await response.json();
}
