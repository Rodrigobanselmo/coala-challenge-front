import React from "react";
import { render } from "@testing-library/react";
import { BHeader } from "./BHeader";

jest.mock("../../core/contexts/AuthContext", () => ({
  useAuth: () => ({
    user: {
      id: "1",
      email: "qwe@qwe.com",
    },
  }),
}));

jest.mock("../../core/contexts/SidebarContext", () => ({
  useSidebarDrawer: () => ({
    open: () => {},
    isTablet: true,
  }),
}));

describe("BHeader", () => {
  it("matches the snapshot", () => {
    const { container } = render(<BHeader />);
    expect(container).toMatchSnapshot();
  });
});
