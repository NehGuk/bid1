const productGallery = document.querySelector("#product-gallery");
const imageCover = document.querySelector("#image-cover");

const imageThumb1 = document.querySelector("#image-thumb-1");
const imageThumb2 = document.querySelector("#image-thumb-2");
const imageThumb3 = document.querySelector("#image-thumb-3");


imageThumb1.addEventListener("click", () => {
    imageCover.src = `
        /assets/sample-image.png
    `;
});

imageThumb2.addEventListener("click", () => {
    imageCover.src = `
        /assets/sample-image-green.png
    `;
});

imageThumb3.addEventListener("click", () => {
    imageCover.src = `
        /assets/sample-image-blue.png
    `;
});