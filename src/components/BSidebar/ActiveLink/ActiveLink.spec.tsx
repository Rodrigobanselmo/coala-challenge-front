import React from "react";
import { render, screen } from "@testing-library/react";
import { ActiveLink } from "./ActiveLink";

jest.mock("next/router", () => {
  let currentAsPath = "/";
  return {
    useRouter: () => ({
      asPath: currentAsPath,
    }),
    setAsPath: (newAsPath: string) => {
      currentAsPath = newAsPath;
    },
  };
});

describe("ActiveLink", () => {
  beforeEach(() => {
    require("next/router").setAsPath("/");
  });

  it("should render with active status when href matches asPath", () => {
    const { asFragment } = render(
      <ActiveLink href="/">
        <p>Home</p>
      </ActiveLink>
    );

    const myElem = screen.getByText("Home");

    expect(asFragment()).toMatchSnapshot();
    expect(myElem).toHaveAttribute("is_active", "1");
  });

  it("should render without active status when href does not match asPath", () => {
    const { asFragment } = render(
      <ActiveLink href="/about">
        <p>Home</p>
      </ActiveLink>
    );

    const myElem = screen.getByText("Home");

    expect(asFragment()).toMatchSnapshot();
    expect(myElem).toHaveAttribute("is_active", "0");
  });

  it("should render with a equal asPath value", () => {
    // Set a different asPath value for this test
    require("next/router").setAsPath("/some-other-path");

    const { asFragment } = render(
      <ActiveLink href="/some-other-path">
        <p>Some Other Path</p>
      </ActiveLink>
    );

    const myElem = screen.getByText("Some Other Path");

    expect(asFragment()).toMatchSnapshot();
    expect(myElem).toHaveAttribute("is_active", "1");
  });

  it("should render with a different asPath value", () => {
    require("next/router").setAsPath("/other-path-2");

    const { asFragment } = render(
      <ActiveLink href="/some-other-path">
        <p>Some Other Path</p>
      </ActiveLink>
    );

    const myElem = screen.getByText("Some Other Path");

    expect(asFragment()).toMatchSnapshot();
    expect(myElem).toHaveAttribute("is_active", "0");
  });
});
