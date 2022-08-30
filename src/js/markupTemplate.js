export function countryСardsTemplate({
  flags,
  name,
  capital,
  population,
  languages,
}) {
  return /*html*/ `
    <div class="country-info__container">
      <div class="country-info__wrapper">
        <img class="country-info__flags" src="${flags.svg}" alt="${name.official}" width="50" />
        <h2 class="country-info__name">${name}</h2>
      </div>
      <p class="country-info__capital">
        <span class="country-info__size">Capital: </span>${capital}
      </p>
      <p class="country-info__population">
        <span class="country-info__size">Population: </span> ${population}</p>
      <p class="country-info__languages">
        <span class="country-info__size">Languages: </span> ${languages.map(language => language.name).join(', ')}
      </p>
    </div>
  `;
}

export function countryListTemplate({ flags, name }) {
  return /*html*/ `
  <li class="country-list__item">
    <img class="country-list__flags" src="${flags.svg}" alt="${name}" width="25" />
    <h2 class="country-list__name">${name}</h2>
  </li>
  `;
}
