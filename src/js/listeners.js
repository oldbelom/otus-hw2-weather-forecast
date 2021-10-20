export function addFormListener(form, getMapCb, getWeatherCb) {
  form.addEventListener("submit", (e) => {
    e.preventDefault();
    getWeatherCb();
    getMapCb();
  });
}

export function addListListener(list, getMapCb, getWeatherCb) {
  list.addEventListener("click", (e) => {
    localStorage.currentCity = e.target.innerText;
    getMapCb();
    getWeatherCb();
  });
}
