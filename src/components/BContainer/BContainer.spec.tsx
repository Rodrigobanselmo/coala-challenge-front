import React from "react";
import { render } from "@testing-library/react";
import { BContainer } from "./BContainer";

describe("BContainer", () => {
  it("matches the snapshot", () => {
    const { container } = render(
      <BContainer>
        <div>Content goes here</div>
      </BContainer>
    );
    expect(container).toMatchSnapshot();
  });
});
