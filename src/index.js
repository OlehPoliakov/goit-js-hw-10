import './css/styles.css';
import { refs } from './js/refs';
import NewApiService from './js/fetchCountries';
import { countryСardsTemplate, countryListTemplate } from './js/markupTemplate';
import { Notify } from 'notiflix/build/notiflix-notify-aio';
import debounce from 'lodash.debounce';

const DEBOUNCE_DELAY = 300;

const newApiService = new NewApiService();

refs.searchForm.addEventListener('input', debounce(onSearch, DEBOUNCE_DELAY));

function onSearch(e) {
  e.preventDefault();

  newApiService.name = e.target.value;

  newApiService
    .fetchCountries()
    .then(appendCountryMarkupTemplate)
    .catch(error => {
      Notify.failure('Oops, there is no country with that name');
      refs.countryList.innerHTML = '';
      refs.countryInfo.innerHTML = '';
      return error;
    });
};

function appendCountryMarkupTemplate(countrys) {
  if (countrys.length > 10) {
    Notify.info('Too many matches found. Please enter a more specific name.');
    refs.countryList.innerHTML = '';
    refs.countryInfo.innerHTML = '';
    return;
  };
  if (countrys.length > 1 && countrys.length <= 10) {
    refs.countryList.innerHTML = countrys
      .map(country => countryListTemplate(country))
      .join('');
    refs.countryInfo.innerHTML = '';
  };
  if (countrys.length === 1) {
    refs.countryInfo.innerHTML = countrys
      .map(country => countryСardsTemplate(country))
      .join('');
    refs.countryList.innerHTML = '';
  };
};