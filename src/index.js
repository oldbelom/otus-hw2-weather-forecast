import "./css/style.scss";
import { renderBasicTemplate, renderCitiesList } from "./js/render";
import { getInitialData, getMap, getWeather } from "./js/getData";
import { addButtonListener, addListListener } from "./js/listeners";

const appContainer = document.querySelector("#app");
renderBasicTemplate(appContainer);
const list = document.querySelector(".controls__list");
const input = document.querySelector(".controls__input");
const btn = document.querySelector(".controls__btn");

renderCitiesList(list);
getInitialData(getMap, getWeather);
addButtonListener(btn, list, input, getMap, getWeather);
addListListener(list, getMap, getWeather);
