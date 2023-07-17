import { galleryItems } from "./gallery-items.js";
// Change code below this line

const galleryCollection = document.querySelector(".gallery");
const cardsMarkup = createImageCardMarkup(galleryItems);

galleryCollection.insertAdjacentHTML("beforeend", cardsMarkup);
galleryCollection.addEventListener("click", handelGalleryCollectionClick);

function createImageCardMarkup(galleryItems) {
  return galleryItems
    .map(({ preview, original, description }) => {
      return `
    <li class="gallery__item">
    <a class="gallery__link" href="${original}">
      <img
        class="gallery__image"
        src="${preview}"
        data-source="${original}"
        alt="${description}"
      />
    </a>
  </li>`;
    })
    .join("");
}

function handelGalleryCollectionClick(evt) {
  evt.preventDefault();

  const originalItem = evt.target.dataset.source;

  if (evt.target.nodeName !== "IMG") return;

  const createModal = basicLightbox.create(`
    <img src="${originalItem}" width="800" height="600">
`);
  createModal.show(() => {
    window.addEventListener("keydown", handelEscKeyDown);
  });
  function handelEscKeyDown(evt) {
    if (evt.code === "Escape") {
      createModal.close(() => {
        window.removeEventListener("keydown", handelEscKeyDown);
      });
    }
  }
}
