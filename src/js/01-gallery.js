import { galleryItems } from "./gallery-items.js";
// Change code below this line
const gallery = document.querySelector(".gallery");
const itemsImgArray = galleryItems
  .map(
    (img) => `<li class="gallery__item">
  <a class="gallery__link" href="large-image.jpg">
    <img
      class="gallery__image"
      src="${img.preview}"
      data-source="${img.original}"
      alt="${img.description}"
      width='300'
    />
  </a>
</li>`
  )
  .join("");

gallery.innerHTML = itemsImgArray;

gallery.addEventListener("click", handleImgBig);

function handleImgBig(event) {
  event.preventDefault();

  const instance = basicLightbox.create(
    `
  <img src="${event.target.dataset.source}">
`
  );

  instance.show();
}
