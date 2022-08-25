import './css/styles.css';
import { refs } from './js/refs';
import NewApiService from './js/fetchCountries';
import { countryСardsTemplate, countryListTemplate } from './js/markupTemplate';


const DEBOUNCE_DELAY = 300;

const newApiService = new NewApiService();

refs.searchForm.addEventListener('input', onSearch);


function onSearch(e) {

  e.preventDefault();


  newApiService.name = e.currentTarget.value;
  
  newApiService
    .fetchCountries()
    .then(refs.countryList.insertAdjacentHTML(countryListTemplate()));
};

// function appendCountryListMarkupTemplate(data) {
  
//   refs.countryList.innerHTML(countryListTemplate(data));

// };

