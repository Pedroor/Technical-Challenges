export default {
  configure: () => ({
    useReactNative: () => ({
      use: () => ({
        connect: () => ({
          createEnhancer: jest.fn(),
        }),
      }),
    }),
  }),
};
