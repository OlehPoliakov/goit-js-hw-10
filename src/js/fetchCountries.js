const BASE_URL = `https://restcountries.com/v2/name/`;
const BASE_FILTER = '?fields=name,capital,population,flags,languages';

export default class NewApiService {
  constructor() {
    this.searchName = '';
  };

  fetchCountries() {
    const url = `${BASE_URL}${this.searchName}${BASE_FILTER}`;

    return fetch(url)
      .then(response => {
        if (response.ok === false) {
          throw new Error();
        }
        return response.json();
      })
      .then(data => {
        return data;
      });
  };

  get name() {
    return this.searchName;
  };

  set name(newName) {
    this.searchName = newName;
  };
};