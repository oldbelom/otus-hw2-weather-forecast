export function createEl(tag, className, parent) {
  const el = document.createElement(`${tag}`);
  el.classList.add(`${className}`);
  parent.appendChild(el);
  return el;
}

export function renderBasicTemplate(rootElement) {
  createEl("img", "map", rootElement);

  const weather = createEl("div", "weather", rootElement);
  createEl("div", "weather__city", weather);
  createEl("div", "weather__degrees", weather);
  createEl("div", "weather__ico", weather);

  const controls = createEl("div", "controls", rootElement);
  const form = createEl("form", "controls__form", controls);
  const input = createEl("input", "controls__input", form);
  input.setAttribute("placeholder", "Enter the name of the city");
  input.setAttribute("pattern", "^[a-zA-Z][a-zA-Z-\\s]+$");
  input.setAttribute("required", "");
  const btn = createEl("input", "controls__btn", form);
  btn.setAttribute("type", "submit");
  btn.value = "Show weather";
  createEl("ul", "controls__list", controls);
}

export function renderCitiesList(list) {
  if (localStorage.cities) {
    const cities = JSON.parse(localStorage.cities);
    for (let i = 0; i < cities.length; i += 1) {
      const li = createEl("li", "controls__list-item", list);
      li.innerText = cities[i];
    }
  }
}
