import React from "react";
import { Initial } from "../../src/screens";

import renderer from "react-test-renderer";

describe("testing if Initial screen render correctly", () => {
  it("should render", () => {
    const tree = renderer.create(<Initial />).toJSON();
    expect(tree).toMatchSnapshot;
  });
});
