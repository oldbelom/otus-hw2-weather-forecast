import { createEl, renderBasicTemplate, renderCitiesList } from "./render";

describe("render functions", () => {
  const body = document.querySelector("body");

  describe("createEl", () => {
    afterAll(() => {
      body.innerHTML = "";
    });
    const div = createEl("div", "myDiv", body);

    it("create element width correct tag", () => {
      expect(div.classList.contains("myDiv")).toBeTruthy();
    });
    it("create element width given class", () => {
      expect(div.tagName).toBe("DIV");
    });
    it("add element to the parent", () => {
      expect(body.innerHTML).toBe('<div class="myDiv"></div>');
    });
  });

  describe("renderBasicTemplate", () => {
    beforeAll(() => {
      renderBasicTemplate(body);
    });

    it("render all main blocks", () => {
      expect(body.childElementCount).toBe(3);
    });
    it("create correct img tag", () => {
      expect(body.children[0].tagName).toBe("IMG");
      expect(body.children[0].className).toBe("map");
    });
    it("create correct div tags", () => {
      expect(body.children[1].tagName).toBe("DIV");
      expect(body.children[1].className).toBe("weather");
      expect(body.children[2].tagName).toBe("DIV");
      expect(body.children[2].className).toBe("controls");
    });
    it("create correct input tag", () => {
      expect(body.children[2].children[0].children[0].tagName).toBe("INPUT");
      expect(body.children[2].children[0].children[0].className).toBe(
        "controls__input"
      );
      expect(
        body.children[2].children[0].children[0].hasAttribute("placeholder")
      ).toBeTruthy();
    });
    it("create correct btn", () => {
      expect(body.children[2].children[0].children[1].tagName).toBe("INPUT");
      expect(body.children[2].children[0].children[1].className).toBe(
        "controls__btn"
      );
      expect(body.children[2].children[0].children[1].value).toBe(
        "Show weather"
      );
    });
    it("create correct ul tag", () => {
      expect(body.children[2].children[1].tagName).toBe("UL");
      expect(body.children[2].children[1].className).toBe("controls__list");
    });
  });

  describe("renderCitiesList", () => {
    let list;
    beforeEach(() => {
      document.body.innerHTML = `<div class="controls__list"></div>`;
      list = document.querySelector(".controls__list");
    });
    it("render list items from array", () => {
      localStorage.setItem(
        "cities",
        JSON.stringify(["Paris", "Monaco", "London"])
      );
      renderCitiesList(list);
      expect(list.childElementCount).toBe(3);
    });
    it("do not render list item if no cities in the array", () => {
      localStorage.setItem("cities", "");
      renderCitiesList(list);
      expect(list.childElementCount).toBe(0);
    });
  });
});
