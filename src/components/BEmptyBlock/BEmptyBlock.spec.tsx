import React from "react";
import { render } from "@testing-library/react";
import { BEmptyBlock } from "./BEmptyBlock";
import { Button } from "@mui/material";

describe("BEmptyBlock", () => {
  it("matches the snapshot", () => {
    const { container } = render(
      <BEmptyBlock
        text="No books found"
        endComponent={<Button>Retry</Button>}
      />
    );
    expect(container).toMatchSnapshot();
  });
});
