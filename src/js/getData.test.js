import { getInitialData, getMap, getWeather } from "./getData";

describe("getData", () => {
  beforeEach(() => {
    document.body.innerHTML = `
      <div class="controls__list">
        <li class="controls__list-item"></li>
      </div>
      <form class="controls__form">
        <input class="controls__input">
      <form>
      <img class="map">
      <div class="weather__city">
      <div class="weather__degrees">
      <div class="weather__ico">
    `;
  });

  describe("getInitialData", () => {
    beforeEach(() => {
      fetch.mockResponseOnce(JSON.stringify({ data: "some data" }));
    });

    const mockGetMap = jest.fn();
    const mockGetWeather = jest.fn();

    it("makes a fetch requests", async () => {
      await getInitialData(mockGetMap, mockGetWeather);
      expect(fetch).toHaveBeenCalledTimes(1);
    });
    it("makes a fetch request for the correct url", async () => {
      const geojsURL = "https://get.geojs.io/v1/ip/geo.json";
      await getInitialData(mockGetMap, mockGetWeather);
      expect(fetch.mock.calls[0][0]).toEqual(geojsURL);
    });
    it("call getMap function", async () => {
      await getInitialData(mockGetMap, mockGetWeather);
      expect(mockGetMap).toHaveBeenCalled();
    });
    it("call getWeather function", async () => {
      await getInitialData(mockGetMap, mockGetWeather);
      expect(mockGetWeather).toBeCalled();
    });
  });

  describe("getMap", () => {
    it("add src attribute to the img tag", () => {
      const img = document.querySelector(".map");
      getMap();
      expect(img.hasAttribute("src")).toBeTruthy();
    });
    it("src attribute contains a link to Google Maps Static API", () => {
      const img = document.querySelector(".map");
      getMap();
      expect(
        img
          .getAttribute("src")
          .startsWith("https://maps.googleapis.com/maps/api/staticmap")
      ).toBeTruthy();
    });
  });

  describe("getWeather", () => {
    it("makes a fetch requests", async () => {
      fetch.mockResponseOnce(
        JSON.stringify({ main: { temp: 300 }, weather: [{ icon: "04d" }] })
      );
      expect(fetch.mock.calls.length).toEqual(0);
      await getWeather();
      expect(fetch.mock.calls.length).toEqual(1);
    });
    it("render correct temp data", async () => {
      fetch.mockResponseOnce(
        JSON.stringify({ main: { temp: 300 }, weather: [{ icon: "04d" }] })
      );
      const degrees = document.querySelector(".weather__degrees");
      await getWeather();
      expect(degrees.innerHTML).toBe("27°");
    });
    it("don't add more than 10 list items", async () => {
      const list = document.querySelector(".controls__list");
      for (let i = 0; i < 15; i += 1) {
        document.body.innerHTML = `
          <div class="controls__list">
            <li class="controls__list-item"></li>
          </div>
          <form class="controls__form">
            <input class="controls__input">
          <form>
          <img class="map">
          <div class="weather__city">
          <div class="weather__degrees">
          <div class="weather__ico">
        `;
        const input = document.querySelector(".controls__input");
        fetch.mockResponse(
          JSON.stringify({ main: { temp: 300 }, weather: [{ icon: "04d" }] })
        );
        input.value = `London${i}`;
        // eslint-disable-next-line
        await getWeather();
      }
      expect(list.childElementCount).not.toBeGreaterThan(10);
    });
  });
});
