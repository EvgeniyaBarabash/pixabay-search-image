import SimpleLightbox from "simplelightbox";
const BASE_URL = `https://pixabay.com/api/`;
let API_KEY = `23557482-2b701da460ed677d29657aa4e`;
import imagesListTmpl from '../tamplates/pixabay.hbs';
import refs from './refs.js';
const{list, formRef, searchBtn}=refs;

let gallery = new SimpleLightbox('.photo-modal');
gallery.on('show.simplelightbox', function () {
	// do something…
});


console.log(gallery);
formRef.addEventListener('submit', onSearch);
searchBtn.addEventListener('submit', onSearch);
// https://pixabay.com/api/?image_type=photo&orientation=horizontal&q=что_искать&page=номер_страницы&per_page=12&key=твой_ключ
function onSearch(e){
  e.preventDefault();
  let query = e.target.query.value;
  let page = 1;
let perPage = 8;
  let params = `?image_type=photo&orientation=horizontal&q=${query}&page=${page}&per_page=${perPage}&key=${API_KEY}`;
  let url = BASE_URL+params;

  return fetch(url)
    .then(response => {
      return response.json();
    })
    .then(({ hits }) => {
      let result = hits.map(hit => {
          const { tags, likes, views, comments, downloads, webformatURL, largeImageURL } = hit;})
          const imagesMarkUp = imagesListTmpl(hits);
    list.insertAdjacentHTML('beforeend', imagesMarkUp);
    })
    .catch(err => {
      console.log(err);
    })
    .finally(() => formRef.reset()).then(clearList())
}
function clearList(){
  list.innerHTML='';
}




// infinity scroll
// const callback = (elements, observer) => {
//   elements.forEach(element => {
//     if (element.isIntersecting) {
//       console.log('element', element)
//     }
//   })
// }

// const observer = new IntersectionObserver(callback)

// observer.observe(document.querySelector('.target'))