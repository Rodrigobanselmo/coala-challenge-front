import React from "react";
import { render } from "@testing-library/react";
import { BSidebar } from "./BSidebar";
import { ThemeProvider } from "@emotion/react";
import theme from "@/configs/theme";
import { ThemeProvider as EmotionProvider } from "@emotion/react";

jest.mock("next/router", () => {
  let currentAsPath = "/";
  return {
    useRouter: () => ({
      asPath: currentAsPath,
    }),
  };
});

describe("BSidebar", () => {
  it("matches the snapshot with isOpen=true and isTablet=false", () => {
    const { container } = render(
      <EmotionProvider theme={theme}>
        <ThemeProvider theme={theme}>
          <BSidebar isTablet={false} isOpen={true} close={() => {}} />
        </ThemeProvider>
      </EmotionProvider>
    );
    expect(container).toMatchSnapshot();
  });

  it("matches the snapshot with isOpen=false and isTablet=true", () => {
    const { container } = render(
      <EmotionProvider theme={theme}>
        <ThemeProvider theme={theme}>
          <BSidebar isTablet={true} isOpen={false} close={() => {}} />
        </ThemeProvider>
      </EmotionProvider>
    );
    expect(container).toMatchSnapshot();
  });
});
