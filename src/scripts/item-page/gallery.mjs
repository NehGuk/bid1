export function createGallery(listingData) {
  for (let i = 0; i < listingData.media.length; i++) {
    const buttonContainer = document.querySelector("#slider-buttons-container");
    const imageContainer = document.querySelector("#image-container");
    buttonContainer.innerHTML += `
        <button type="button" data-bs-target="#gallery-container" data-bs-slide-to="${i}" class="active"></button>
    `;
    imageContainer.innerHTML += `
        <div class="carousel-item active">
            <img src="${listingData.media[i]}" alt="Los Angeles" class="d-block" style="width: 100%; height: 50vh; object-fit: cover;"/>
        </div>
    `;
  }
  if (listingData.media.length === 1) {
    const sliderButtons = document.querySelector("#slider-buttons-container");
    sliderButtons.style.display = "none";

    const sliderArrows = document.querySelector("#slider-arrows");
    sliderArrows.style.display = "none";
  }
}
