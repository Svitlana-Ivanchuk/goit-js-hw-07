import { galleryItems } from "./gallery-items.js";
import * as basicLightbox from "basiclightbox";
// Change code below this line

// const basicLightbox = require("basiclightbox");

const galleryCollection = document.querySelector(".gallery");
const cardsMarkup = createImageCardsMarkup(galleryItems);

galleryCollection.insertAdjacentHTML("beforeend", cardsMarkup);
galleryCollection.addEventListener("click", handlerGalleryCollectionClick);

function createImageCardsMarkup(galleryItems) {
  return galleryItems
    .map(({ preview, original, description }) => {
      return `<li class="gallery__item">
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

function handlerGalleryCollectionClick(e) {
  console.log(e.target);
}

const instance = basicLightbox.create(`
    <div class="modal">
        <p>
            Your first lightbox with just a few lines of code.
            Yes, it's really that simple.
        </p>
    </div>
`);

instance.show();
