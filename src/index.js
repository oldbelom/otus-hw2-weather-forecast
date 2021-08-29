import "./css/style.scss";
import { renderBasicTemplate } from "./js/render";
import { getInitialData, getMap, getWeather } from "./js/getData";

const appContainer = document.querySelector("#app");
renderBasicTemplate(appContainer);
getInitialData(getMap, getWeather);
