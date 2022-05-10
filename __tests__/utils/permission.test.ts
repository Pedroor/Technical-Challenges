import RequestPermissions from "../../src/utils/permissions";

describe("RequestPermissions", () => {
  test("Should return permission", async () => {
    const res = await RequestPermissions();
    expect(res).toEqual(undefined);
  });
});
