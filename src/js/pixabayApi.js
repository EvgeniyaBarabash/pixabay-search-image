import axios from 'axios';

axios.defaults.baseURL = 'https://pixabay.com/api/';
axios.defaults.params = { key: '23557482-2b701da460ed677d29657aa4e' };

export default class PixabyApi{
    constructor(){
        this._query='';
        this._page=1;
        this.perPage=8;
    }
    async getPhotos(){
        const { data} = await axios.get(`?image_type=photo&orientation=horizontal&q=${this._query}&page=${this._page}&per_page=${
            this.perPage
          }`,)
          this.incrementPage();
          return data;
    }
    get query(){
        return this._query;
    }
    set query(newQuery){
this._query=newQuery;
this._page=1; 
    }
    incrementPage(value=1){
        this._page+=value;
    }
    decrementPage(value=1){
        this._page-=value;
    }
}