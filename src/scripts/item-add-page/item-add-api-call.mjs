import { createEntryURL } from "../api/api-base-urls.mjs";
import { fetchMetdhods } from "../api/fetch-methods.mjs";
const { createEntry } = fetchMetdhods;

const addNewItemForm = document.querySelector("#add-new-item-form");
const title = document.querySelector("#title");
const description = document.querySelector("#description");
const date = document.querySelector("#date");
const time = document.querySelector("#time");
const endsAt = `${date.value}T${time.value}`;
const media1 = document.querySelector("#media1");
const media2 = document.querySelector("#media2");
const media3 = document.querySelector("#media3");

const itemObject = {
  title: `${title.value}`,
  description: `${description.value}`,
  tags: [],
  media: [`${media1.value}`, `${media2.value}`, `${media3.value}`],
  endsAt: endsAt,
};

createEntry.body = JSON.stringify(itemObject);

addNewItemForm.addEventListener("submit", (event) => {
  event.preventDefault();

  async function createNewIteminAPI() {
    console.log(createEntryURL);
    console.log(createEntry);

    const response = await fetch(createEntryURL, createEntry);
    const json = await response.json();
  }
  createNewIteminAPI();

  // Reset form and redirect user to my account page
});
