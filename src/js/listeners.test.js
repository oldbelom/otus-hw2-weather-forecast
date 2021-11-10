import { addFormListener, addListListener } from "./listeners";

describe("listeners", () => {
  let list;
  let li;
  let form;
  let getMap;
  let getWeather;

  beforeEach(() => {
    document.body.innerHTML = `
      <div class="controls__list">
        <li class="controls__list-item"></li>
      </div>
      <form class="controls__form"><form>
    `;

    list = document.querySelector(".controls__list");
    li = document.querySelector(".controls__list-item");
    form = document.querySelector(".controls__form");

    getMap = jest.fn();
    getWeather = jest.fn();
  });

  describe("addFormListener", () => {
    beforeEach(() => {
      list.innerHTML = "";
    });

    it("call callback functions", () => {
      addFormListener(form, getMap, getWeather);
      form.submit();
      expect(getWeather).toHaveBeenCalled();
      expect(getMap).toHaveBeenCalled();
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
