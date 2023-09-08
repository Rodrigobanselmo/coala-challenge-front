import React from "react";
import { render } from "@testing-library/react";
import { Session } from "./Session";

jest.mock("../../../core/contexts/AuthContext", () => ({
  useAuth: () => ({
    user: null,
    googleSignIn: () => {},
    signOut: () => {},
  }),
}));

describe("Session", () => {
  it("matches the snapshot when user is null", () => {
    const { container } = render(<Session />);
    expect(container).toMatchSnapshot();
  });

  it("matches the snapshot when user is authenticated", () => {
    jest.mock("../../../core/contexts/AuthContext", () => ({
      useAuth: () => ({
        user: {
          id: "1",
          email: "qwe@qwe.com",
        },
        googleSignIn: () => {},
        signOut: () => {},
      }),
    }));

    const { container } = render(<Session />);
    expect(container).toMatchSnapshot();
  });
});
