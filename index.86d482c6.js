const t={searchForm:document.querySelector("#search-box"),countryList:document.querySelector(".country-list"),countryInfo:document.querySelector(".country-info")};function e({flags:t,name:e}){return`\n  <li class="country-list__item">\n    <img class="country-list__flags" src="${t.svg}" alt="${e.official}" width="25" />\n    <h2 class="country-list__name">${e.official}</h2>\n  </li>\n  `}const n=new class{fetchCountries(){const t=`https://restcountries.com/v2/name/${this.searchName}?fields=name.official,capital,population,flags.svg,languages`;return fetch(t).then((t=>t.json())).then((({data:t})=>t))}get name(){return this.searchName}set name(t){this.searchName=t}constructor(){this.searchName=""}};t.searchForm.addEventListener("input",(function(s){s.preventDefault(),n.name=s.currentTarget.value,n.fetchCountries().then(t.countryList.insertAdjacentHTML(e()))}));
//# sourceMappingURL=index.86d482c6.js.map
