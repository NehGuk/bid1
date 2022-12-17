import { createEntryURL } from "../api/api-base-urls.mjs";
import { fetchMetdhods } from "../api/fetch-methods.mjs";
const { createEntry } = fetchMetdhods;

const addNewItemForm = document.querySelector("#add-new-item-form");
const errorMessage = document.querySelector("#error-message");
errorMessage.style.display = "none";

const title = document.querySelector("#title");
const description = document.querySelector("#description");
const date = document.querySelector("#date");
date.min = new Date().toISOString().slice(0, -14);
const time = document.querySelector("#time");
const media1 = document.querySelector("#media1");
const media2 = document.querySelector("#media2");
const media3 = document.querySelector("#media3");

addNewItemForm.addEventListener("submit", (event) => {
  event.preventDefault();

  const endsAt = new Date(`${date.value}T${time.value}`);

  const itemObject = {
    title: `${title.value}`,
    description: `${description.value}`,
    tags: [],
    media: [`${media1.value}`, `${media2.value}`, `${media3.value}`],
    endsAt: endsAt,
  };

  createEntry.body = JSON.stringify(itemObject);

  async function createNewIteminAPI() {
    try {
      const response = await fetch(createEntryURL, createEntry);
      const json = await response.json();
      if (response.status === 201) {
        location.href = "/my-account.html";
      } else {
        errorMessage.style.display = "block";
        errorMessage.innerHTML = ``;

        for (let i = 0; i < json.errors.length; i++) {
          console.log(i);
          console.log(json.errors[i].message);
          errorMessage.style.display = "block";
          errorMessage.innerHTML += `${json.errors[i].message}<br>`;
        }
      }
    } catch (error) {
      console.log(error);
    }
  }
  createNewIteminAPI();
});
