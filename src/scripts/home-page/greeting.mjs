console.log("hasdhasjda");

let dateNow = new Date();

const formattedDateNow = dateNow.toLocaleDateString("en-us", {
  month: "short",
  day: "numeric",
  hour: "2-digit",
  minute: "2-digit",
});

function greetUser() {
  const greetContainer = document.querySelector("#greeting-container");
  const userToGreet = localStorage.getItem("name");

  greetContainer.innerHTML = `
    <p class="text-muted">${formattedDateNow}</p>    
    <h1>What's up, ${userToGreet}? </h1>`;
}
greetUser();
