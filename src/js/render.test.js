import { createEl } from "./render";

describe("render functions", () => {
  const body = document.querySelector("body");
  const div = createEl("div", "myDiv", body);

  describe("createEl", () => {
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
});
