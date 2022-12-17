export async function deleteFromAPI(url, method) {
  try {
    const response = await fetch(url, method);

    if (response.status === 204) {
      location.href = "/my-account.html";
    } else {
      console.log("There has been an issue. Whatttt????!!!");
      const errorMessage = document.querySelector("#error-message");
      errorMessage.style.display = "block";
      errorMessage.innerHTML = "There has been an error. Please try again later.";
    }
  } catch (error) {
    console.log(error);
  }
}
