import { galleryItems } from "./gallery-items.js";
// Change code below this line

console.log(galleryItems);

const container = document.querySelector(".gallery");
const createGallery = addGalleryItems(galleryItems);

container.insertAdjacentHTML("beforeend", createGallery);

function addGalleryItems(items) {
  return items
    .map(({ preview, original, description }) => {
      return `
    <li class="gallery__item">
        <a class="gallery-link" href="${original}">
            <img
                class="gallery__image"
                src="${preview}"
                alt="${description}"
            />
        </a>
    </li>
    `;
    })
    .join("");
}

const simple = new SimpleLightbox(".gallery a", {
  captionDelay: 250,
  captionsData: "alt",
});
