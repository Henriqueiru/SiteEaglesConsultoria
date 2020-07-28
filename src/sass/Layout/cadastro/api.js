// Estados

function populateUfs() {
  const ufSelect = document.querySelector("select[name=uf]");

  fetch("https://servicodados.ibge.gov.br/api/v1/localidades/estados")
    .then((res) => res.json())
    .then((states) => {
      for (state of states) {
        ufSelect.innerHTML += `<option value="${state.id}">${state.nome}</option> `;
      }
    });
}
populateUfs();

function getCities(event) {
  const citiesSelect = document.querySelector("select[name=city]");
  const uflcity = event.target.value;
  const url = `https://servicodados.ibge.gov.br/api/v1/localidades/estados/${uflcity}/municipios`;
  console.log(event.target.value);

  fetch(url)
    .then((res) => res.json())
    .then((cities) => {
      for (city of cities) {
        citiesSelect.innerHTML += `<option value="${city.id}">${city.nome}</option> `;
      }
      citiesSelect.disabled = false;
    });
}

document.querySelector("select[name=uf]").addEventListener("change", getCities);
