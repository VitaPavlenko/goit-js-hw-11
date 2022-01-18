import axios from 'axios';
const BASE_URL = 'https://pixabay.com/api/';
const Key = '25274057-dba1b364b326199f79c25f588';

export default class Feach {
  constructor() {
    this.page = 1;
    this.inputEl = '';
  }

  async searchImage() {
    const response = await axios.get(
      `${BASE_URL}?key=${Key}&q=${this.inputEl}&image_type=photo&orientation=horizontal&safesearch=true&per_page=40&page=${this.page}`,
    );
    console.log(response);
    const users = await response.data;

    return users;
  }

  increment() {
    this.page += 1;
  }

  resetPage() {
    this.page = 1;
  }

  get inputValue() {
    return (this.inputEl = '');
  }

  set inputValue(newValue) {
    this.inputEl = newValue;
  }

  get pages() {
    return (this.page = 1);
  }
}
