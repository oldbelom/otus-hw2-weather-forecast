import { getInitialData, getMap, getWeather } from "./getData";

describe("getData", () => {
  describe("getInitialData", () => {
    beforeEach(() => {
      fetch.mockResponseOnce(JSON.stringify({ data: "some data" }));
    });

    it("makes a fetch requests", async () => {
      expect(fetch.mock.calls.length).toEqual(0);
      await getInitialData(getMap, getWeather);
      expect(fetch.mock.calls.length).toEqual(2);
    });
    it("makes a fetch request for the correct url", async () => {
      const geojsURL = "https://get.geojs.io/v1/ip/geo.json";
      await getInitialData(getMap, getWeather);
      expect(fetch.mock.calls[0][0]).toEqual(geojsURL);
    });
    it("called getMap function", async () => {
      const fakeGetMap = jest.fn();
      await getInitialData(fakeGetMap, getWeather);
      expect(fakeGetMap).toHaveBeenCalled();
    });
    it("called getWeather function", async () => {
      const fakeGetWeather = jest.fn();
      await getInitialData(getMap, fakeGetWeather);
      expect(fakeGetWeather).toBeCalled();
    });
  });

  describe("getMap", () => {
    document.body.innerHTML = `<img class="map">`;
    const img = document.querySelector(".map");

    it("add src attribute to the img tag", () => {
      getMap();
      expect(img.hasAttribute("src")).toBeTruthy();
    });
    it("src attribute contains a link to Google Maps Static API", () => {
      getMap();
      expect(
        img
          .getAttribute("src")
          .startsWith("https://maps.googleapis.com/maps/api/staticmap")
      ).toBeTruthy();
    });
  });

  describe("getWeather", () => {
    beforeEach(() => {
      fetch.mockResponseOnce(
        JSON.stringify({ main: { temp: 300 }, weather: [{ icon: "04d" }] })
      );
      document.body.innerHTML = `
        <div class="weather__city">
        <div class="weather__degrees">
        <div class="weather__ico">
      `;
    });

    it("makes a fetch requests", async () => {
      expect(fetch.mock.calls.length).toEqual(0);
      await getWeather();
      expect(fetch.mock.calls.length).toEqual(1);
    });
    it("render correct temp data", async () => {
      const degrees = document.querySelector(".weather__degrees");
      await getWeather();
      expect(degrees.innerHTML).toBe("27");
    });
    it("render icon", async () => {
      const icon = document.querySelector(".weather__ico");
      await getWeather();
      expect(icon.children[0].tagName).toBe("IMG");
    });
  });
});
