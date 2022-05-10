import React from "react";
import { Home } from "../../src/screens";

import renderer from "react-test-renderer";

describe("testing if Initial screen render correctly", () => {
  it("should render", () => {
    const tree = renderer.create(<Home />).toJSON();
    expect(tree).toMatchSnapshot;
  });
});
