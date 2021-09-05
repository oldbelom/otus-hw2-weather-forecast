import { addFormListener, addListListener } from "./listeners";

describe("listeners", () => {
  let list;
  let li;
  let form;
  let input;
  let getMap;
  let getWeather;

  beforeEach(() => {
    document.body.innerHTML = `
      <div class="controls__list">
        <li class="controls__list-item"></li>
      </div>
      <form class="controls__form">
        <input class="controls__input">
      <form>
    `;

    list = document.querySelector(".controls__list");
    li = document.querySelector(".controls__list-item");
    form = document.querySelector(".controls__form");
    input = document.querySelector(".controls__input");

    getMap = jest.fn();
    getWeather = jest.fn();
  });

  describe("addFormListener", () => {
    beforeEach(() => {
      list.innerHTML = "";
    });

    it("call callback functions", () => {
      addFormListener(form, list, input, getMap, getWeather);
      form.submit();
      expect(getWeather).toHaveBeenCalled();
      expect(getMap).toHaveBeenCalled();
    });
    it("add city to list", () => {
      input.value = "Paris";
      addFormListener(form, list, input, getMap, getWeather);
      expect(list.childElementCount).toBe(0);
      form.submit();
      expect(list.childElementCount).toBe(1);
    });
    it("don't add a city to the list if it already exists", () => {
      list.innerHTML = "";
      for (let i = 0; i < 3; i += 1) {
        input.value = "Monaco";
        addFormListener(form, list, input, getMap, getWeather);
        form.submit();
      }
      expect(list.childElementCount).toBe(1);
    });
    it("don't add more than 10 list items", () => {
      for (let i = 0; i < 15; i += 1) {
        input.value = `London${i}`;
        addFormListener(form, list, input, getMap, getWeather);
        form.submit();
      }
      expect(list.childElementCount).not.toBeGreaterThan(10);
    });
    it("clean input value", () => {
      input.value = "Chicago";
      addFormListener(form, list, input, getMap, getWeather);
      form.submit();
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
