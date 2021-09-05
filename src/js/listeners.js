import { createEl } from "./render";

export function addFormListener(form, list, input, getMapCb, getWeatherCb) {
  form.addEventListener("submit", (e) => {
    e.preventDefault();
    const cities = localStorage.cities ? JSON.parse(localStorage.cities) : [];

    if (list.childElementCount >= 10) {
      list.removeChild(list.firstElementChild);
      cities.shift();
      localStorage.setItem("cities", JSON.stringify(cities));
    }

    if (!cities.includes(input.value)) {
      const li = createEl("li", "controls__list-item", list);
      li.innerText = input.value;
      cities.push(input.value);
      localStorage.setItem("cities", JSON.stringify(cities));
      localStorage.currentCity = input.value;
      getMapCb();
      getWeatherCb();
      input.value = "";
    }
  });
}

export function addListListener(list, getMapCb, getWeatherCb) {
  list.addEventListener("click", (e) => {
    localStorage.currentCity = e.target.innerText;
    getMapCb();
    getWeatherCb();
  });
}
