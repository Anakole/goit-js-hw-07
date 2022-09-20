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
}

container.addEventListener("click", openFullImg);

function openFullImg(event) {
  event.preventDefault();

  if (event.target.nodeName !== "IMG") {
    return;
  }

  const instance = basicLightbox.create(`
    <img src="${event.target.dataset.source}" width="800" height="600">
`);

  instance.show();

  container.addEventListener("keydown", (event) => {
    if (event.key === "Escape") {
      instance.close();
    }
  });

  console.log(event);
}
