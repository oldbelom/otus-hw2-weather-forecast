import { addButtonListener, addListListener } from "./listeners";

describe("listeners", () => {
  let list;
  let li;
  let input;
  let btn;
  let getMap;
  let getWeather;

  beforeEach(() => {
    document.body.innerHTML = `
    <div class="controls__list">
      <li class="controls__list-item"></li>
    </div>
    <div class="controls__input"></div>
    <button class="controls__btn"></button>
  `;

    list = document.querySelector(".controls__list");
    input = document.querySelector(".controls__input");
    btn = document.querySelector(".controls__btn");
    li = document.querySelector(".controls__list-item");

    getMap = jest.fn();
    getWeather = jest.fn();
  });

  describe("addButtonListener", () => {
    beforeEach(() => {
      list.innerHTML = "";
    });

    it("call getMap function", () => {
      addButtonListener(btn, list, input, getMap, getWeather);
      btn.click();
      expect(getMap).toHaveBeenCalled();
    });
    it("call getWeather function", () => {
      addButtonListener(btn, list, input, getMap, getWeather);
      btn.click();
      expect(getWeather).toHaveBeenCalled();
    });
    it("add city to list", () => {
      input.value = "Paris";
      addButtonListener(btn, list, input, getMap, getWeather);
      expect(list.childElementCount).toBe(0);
      btn.click();
      expect(list.childElementCount).toBe(1);
    });
    it("don't add a city to the list if it already exists", () => {
      list.innerHTML = "";
      for (let i = 0; i < 3; i += 1) {
        input.value = "Monaco";
        addButtonListener(btn, list, input, getMap, getWeather);
        btn.click();
      }
      expect(list.childElementCount).toBe(1);
    });
    it("don't add more than 10 list items", () => {
      for (let i = 0; i < 15; i += 1) {
        input.value = `London${i}`;
        addButtonListener(btn, list, input, getMap, getWeather);
        btn.click();
      }
      expect(list.childElementCount).not.toBeGreaterThan(10);
    });
    it("clean input value", () => {
      input.value = "Chicago";
      addButtonListener(btn, list, input, getMap, getWeather);
      btn.click();
      expect(input.value).toBe("");
    });
  });

  describe("addListListener", () => {
    it("call getMap function", () => {
      addListListener(list, getMap, getWeather);
      li.click();
      expect(getMap).toHaveBeenCalled();
    });
    it("call getWeather function", () => {
      addListListener(list, getMap, getWeather);
      li.click();
      expect(getWeather).toHaveBeenCalled();
    });
  });
});
