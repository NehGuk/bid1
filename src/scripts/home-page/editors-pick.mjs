export function showEditorPicks(editorsChoiceArray) {
  const editorsChoideSlider = document.querySelector("#editors-choices-slider");
  const slideImage = document.querySelector("#slide-image");
  const slideTitle = document.querySelector("#slide-title");

  editorsChoideSlider.innerHTML = ``;
  for (let i = 0; i < editorsChoiceArray.length; i++) {
    editorsChoideSlider.innerHTML += `
      <div class="carousel-item active">
        <img src="${editorsChoiceArray[i].media[0]}" width="100%" height="400px" style="object-fit:cover; -webkit-filter: blur(5px); filter: brightness(0.5) blur(5px)" id="slide-image">
        <div class="container">
          <div class="carousel-caption text-center">
            <p class="small text-white">EDITOR'S CHOICE</p>
            <h3 id="slide-title">${editorsChoiceArray[i].title}</h3>    
            <p><a class="btn btn-lg btn-primary" href="/item.html?id=${editorsChoiceArray[i].id}">Bid now</a></p>
          </div>
        </div>
      </div>
    `;
  }
}
