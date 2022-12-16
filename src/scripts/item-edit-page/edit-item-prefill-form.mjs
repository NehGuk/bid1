export function prefillUpdateForm(itemInfo) {
  const titleInput = document.querySelector("#title");
  titleInput.value = itemInfo.title;
  const descriptionInput = document.querySelector("#description");
  descriptionInput.value = itemInfo.description;

  const onlyDate = new Date(itemInfo.endsAt).toISOString().slice(0, -14);
  const dateInput = document.querySelector("#date");
  dateInput.value = onlyDate;
  dateInput.min = new Date().toISOString().slice(0, -14);

  const onlyTime = new Date(itemInfo.endsAt).toLocaleTimeString().slice(0, -3);
  const timeInput = document.querySelector("#time");
  timeInput.value = onlyTime;

  const media1 = document.querySelector("#media1");
  media1.value = itemInfo.media[0];

  const media2 = document.querySelector("#media2");
  media2.value = itemInfo.media[1];

  const media3 = document.querySelector("#media3");
  media3.value = itemInfo.media[2];
}
