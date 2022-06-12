import {
  geolocationReducer,
  actions,
} from "../../../../src/redux/store/slices/geolocation";

test("should return the initial state", () => {
  expect(geolocationReducer(undefined, {})).toEqual({
    latitude: 0,
    longitude: 0,
  });
});
