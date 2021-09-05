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
  const apiKey = "AIzaSyCq28DsRI3TuwNEBV_sRDjenK9m82gGWN4";
  const city = localStorage.getItem("currentCity");
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
  const apiKey = "8f2c5761371185563563571cb3a56c37";
  const city = localStorage.getItem("currentCity");
  const response = await fetch(
    `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}`
  );
  const weatherData = await response.json();
  cityName.innerHTML = city;
  degrees.innerHTML = `${Math.ceil(weatherData.main.temp - 273)}&deg`;
  icon.innerHTML =
    `<img src="http://openweathermap.org/img/wn/` +
    `${weatherData.weather[0].icon}@2x.png">`;
}
