import { createEl } from "./render";

export async function getInitialData(getMapCallback, getWeatherCallback) {
  const response = await fetch("https://get.geojs.io/v1/ip/geo.json");
  const geoData = await response.json();
  const currentCity = geoData.city;
  localStorage.setItem("currentCity", currentCity);
  getMapCallback();
  getWeatherCallback();
}

export function getMap() {
  const img = document.querySelector(".map");
  const input = document.querySelector(".controls__input");
  const apiKey = "AIzaSyCq28DsRI3TuwNEBV_sRDjenK9m82gGWN4";
  const city =
    input.value !== "" ? input.value : localStorage.getItem("currentCity");
  const requestToGoogleMaps =
    `https://maps.googleapis.com/maps/api/staticmap?` +
    `center=${city}` +
    `&zoom=10` +
    `&size=500x500` +
    `&key=${apiKey}`;
  img.setAttribute("src", requestToGoogleMaps);
}

export async function getWeather() {
  const cityName = document.querySelector(".weather__city");
  const degrees = document.querySelector(".weather__degrees");
  const icon = document.querySelector(".weather__ico");
  const list = document.querySelector(".controls__list");
  const input = document.querySelector(".controls__input");
  const img = document.querySelector(".map");

  const apiKey = "8f2c5761371185563563571cb3a56c37";

  const city =
    input.value !== "" ? input.value : localStorage.getItem("currentCity");
  const cities = localStorage.cities ? JSON.parse(localStorage.cities) : [];

  const response = await fetch(
    `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}`
  );

  if (response.ok === true) {
    const weatherData = await response.json();
    cityName.innerHTML = city;
    degrees.innerHTML = `${Math.ceil(weatherData.main.temp - 273)}&deg`;
    icon.innerHTML =
      `<img src="http://openweathermap.org/img/wn/` +
      `${weatherData.weather[0].icon}@2x.png">`;
    img.classList.remove("hide");
  } else {
    cityName.innerHTML = "Error loading weather data";
    degrees.innerHTML = "";
    icon.innerHTML = "";
    img.classList.add("hide");
  }

  if (
    response.ok === true &&
    !cities.includes(input.value) &&
    input.value !== ""
  ) {
    const li = createEl("li", "controls__list-item", list);
    li.innerText = input.value;
    cities.push(input.value);
    localStorage.setItem("cities", JSON.stringify(cities));
    localStorage.currentCity = input.value;
  }

  if (list.childElementCount > 10) {
    list.removeChild(list.firstElementChild);
    cities.shift();
    localStorage.setItem("cities", JSON.stringify(cities));
  }

  input.value = "";
}
