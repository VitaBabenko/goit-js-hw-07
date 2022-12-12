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
  if (evt.target.nodeName !== 'IMG') {
    return;
  };
  const source = evt.target.dataset.source;
  // console.log(source);
  const instance = basicLightbox.create(`
  <img src="${source}"/>
  `,
    {
      onShow: instance => { document.addEventListener('keydown', onEscKeyDown); },
      onClose: instance => { document.removeEventListener('keydown', onEscKeyDown); },
    });
  instance.show();
  // console.log(instance);
  function onEscKeyDown(evt) {
    // console.log(evt.code);
    if (evt.code !== 'Escape') {
      return;
    }
    instance.close();
  }
};