import SimpleLightbox from "simplelightbox";
import { Notify } from 'notiflix';
import PixabayApi from './pixabayApi.js';
const BASE_URL = `https://pixabay.com/api/`;
let API_KEY = `23557482-2b701da460ed677d29657aa4e`;
import imagesListTmpl from '../tamplates/pixabay.hbs';
import refs from './refs.js';
const{list, formRef, searchBtn,}=refs;

let gallery = new SimpleLightbox('.photo-modal');
let pixabay = new PixabayApi();

formRef.addEventListener('submit', onSearch);
searchBtn.addEventListener('submit', onSearch);

const observer = new IntersectionObserver((entries, observer) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        fetchPhotos();
        observer.unobserve(entry.target);
      }
    });
  });


async function fetchPhotos(isFirstQuery = false){
  try{
    const data= await pixabay.getPhotos()
    gallaryList(data.hits);
    AddObserver();
    if (isFirstQuery) {
      if (data.totalHits) Notify.success(`Hooray! We found ${data.totalHits} images.`);
      else {
        Notify.failure('Sorry, there are no images matching your search query. Please try again.');
        return;
      }

    if (data.hits.length < pixabay.perPage) {
      Notify.info("We're sorry, but you've reached the end of search results.");
      return;
    }}
 }catch (err) {
    console.log(err);
    Notify.failure(`Something went wrong(${err.message})`);
  }
   

}
 function gallaryList(hits){
   const markup = imagesListTmpl(hits);
   list.insertAdjacentHTML('beforeend', markup);
   gallery.refresh()
 }


 function onSearch(e){
e.preventDefault();
pixabay.query = formRef.query.value.trim();
fetchPhotos(true)
clearGallaryList()
formRef.reset();
 }

 function clearGallaryList(){
   list.innerHTML='';
 };
 
function AddObserver() {
  observer.observe(list.querySelector(".photo-card:last-child"));
}