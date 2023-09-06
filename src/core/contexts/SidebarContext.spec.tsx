import React from "react";
import { render, screen } from "@testing-library/react";
import { SidebarDrawerProvider, useSidebarDrawer } from "./SidebarContext";

jest.mock("@mui/material/useMediaQuery", () => {
  return (query: string) => query === "(min-width:600px)";
});

jest.mock("next/router", () => ({
  useRouter: () => ({
    asPath: "/",
  }),
}));

jest.mock("../../hooks/useDisclosure", () => ({
  useDisclosure: () => ({
    isOpen: false,
    open: jest.fn(),
    close: jest.fn(),
    toggle: jest.fn(),
  }),
}));

describe("SidebarDrawerProvider", () => {
  it("renders children and provides context", () => {
    function TestComponent() {
      return <p>Test Component</p>;
    }

    render(
      <SidebarDrawerProvider>
        <TestComponent />
      </SidebarDrawerProvider>
    );

    const children = screen.getByText("Test Component");
    expect(children).toBeInTheDocument();
  });

  it("provides context values with default values", () => {
    let contextValues: ReturnType<typeof useSidebarDrawer> | undefined;
    function TestComponent() {
      contextValues = useSidebarDrawer();
      return <p>Test Component</p>;
    }

    render(
      <SidebarDrawerProvider>
        <TestComponent />
      </SidebarDrawerProvider>
    );

    if (!contextValues) {
      throw new Error("Context values not assigned.");
    }

    expect(contextValues.isTablet).toBe(true);
    expect(contextValues.alwaysOpen).toBe(true);
    expect(contextValues.isOpen).toBe(true);
  });
});
