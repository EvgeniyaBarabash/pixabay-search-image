const BASE_URL = `https://pixabay.com/api/`;
let API_KEY = `23557482-2b701da460ed677d29657aa4e`;
const params = `?image_type=photo&orientation=horizontal&q=`;
import imagesListTmpl from '../tamplates/pixabay.hbs';
import refs from './refs.js';
const{list, formRef}=refs;


formRef.addEventListener('submit', e => {
      e.preventDefault();
      let query = e.target.elements.query.value;
      console.log(query);
      let pageNumber = 1;
      const params = `?image_type=photo&orientation=horizontal&q=`;
      let url = `${BASE_URL}${params}${query}&page=${pageNumber}&per_page=12&key=${API_KEY}`;
    
      return fetch(url)
        .then(response => {
          return response.json();
        })
        .then(({ hits }) => {
          let result = hits
            .map(hit => {
              const { tags, likes, views, comments, downloads, webformatURL, largeImageURL } = hit;
              const imagesMarkUp = imagesListTmpl(hits);
        list.insertAdjacentHTML('beforeend', imagesMarkUp);
        })})
        .catch(err => {
          console.log(err);
        })
        .finally(() => formRef.reset());
    });