import { galleryItems } from './gallery-items.js';
// Change code below this line

// console.log(galleryItems);

const gallery = document.querySelector('.gallery');
// console.log(gallery);

const markup = galleryItems.map(({ preview, original, description }) => {
    return `<div class="gallery__item">
  <a class="gallery__link" href="${original}">
    <img
      class="gallery__image"
      src="${preview}"
      data-source="${original}"
      alt="${description}"
    />
  </a>
</div>`}).join('');

gallery.insertAdjacentHTML('beforeend', markup);
// console.dir(gallery);

gallery.addEventListener('click', onImageClick);

function onImageClick(evt) {
    evt.preventDefault();
    if (evt.target.classList.contains('gallery__image')) {
        const source = evt.target.dataset.source;
        // console.log(source);

        const instance = basicLightbox.create(`
        <img src="${source}"/>
        `)
        instance.show();

        document.addEventListener('keydown', onEscKeyDown);

        function onEscKeyDown(evt) {
            // console.log(evt.code);
            if (evt.code === 'Escape') {
                instance.close();
                document.removeEventListener('keydown', onEscKeyDown);
            } 
        }
    }
}






