export function createEl(tag, className, parent) {
  const el = document.createElement(`${tag}`);
  el.classList.add(`${className}`);
  parent.appendChild(el);
  return el;
}

export function renderBasicTemplate(rootElement) {
  createEl("img", "map", rootElement);
  const weather = createEl("div", "weather", rootElement);
  const controls = createEl("div", "controls", rootElement);
  createEl("div", "weather__city", weather);
  createEl("div", "weather__degrees", weather);
  createEl("div", "weather__ico", weather);
  const input = createEl("input", "controls__input", controls);
  input.setAttribute("placeholder", "Enter the name of the city");
  const btn = createEl("button", "controls__btn", controls);
  btn.innerText = "Show weather";
  createEl("ul", "controls__list", controls);
}
