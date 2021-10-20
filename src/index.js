import "./css/style.scss";
import { renderBasicTemplate, renderCitiesList } from "./js/render";
import { getInitialData, getMap, getWeather } from "./js/getData";
import { addFormListener, addListListener } from "./js/listeners";

const appContainer = document.querySelector("#app");

renderBasicTemplate(appContainer);

const list = document.querySelector(".controls__list");
const form = document.querySelector(".controls__form");

renderCitiesList(list);
getInitialData(getMap, getWeather);
addFormListener(form, getMap, getWeather);
addListListener(list, getMap, getWeather);
