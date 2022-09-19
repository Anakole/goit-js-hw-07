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
    <div class="gallery__item">
        <a class="gallery__link" href="${original}">
            <img 
                class="gallery__image" 
                src="${preview}" 
                data-source="${original}" 
                alt="${description}"
            />
        </a>
    </div>
    `;
    })
    .join("");

  console.log(markup);
}

function openFullImg(event) {
  event.preventDefault();

  const isGalleryImageEl =
    event.target.classList.contain("gallery__image");

  if (!isGalleryImageEl) {
    return;
  }
}
