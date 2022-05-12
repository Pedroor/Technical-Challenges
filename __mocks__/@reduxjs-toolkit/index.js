jest.mock("@reduxjs/toolkit", () => ({
  configureStore: jest.fn(),
  createSlice: jest.fn(),
  geolocationSlice: jest.fn(),
  store: jest.fn(),
}));
