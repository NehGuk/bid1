export function showEditiOptions() {
  const dynamicSection = document.querySelector("#place-your-bid-section");
  dynamicSection.classList.remove("bg-info", "my-5");
  dynamicSection.innerHTML = `
        <button type="button" class="btn btn-primary mt-1 mb-5" style="width: 100%" id="edit-item-button">Edit item</button>
    `;
  const editItemButton = document.querySelector("#edit-item-button");

  editItemButton.addEventListener("click", () => {
    console.log("Direct user to edit item form");
  });
}
