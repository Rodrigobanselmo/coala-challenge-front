import React from "react";
import { render } from "@testing-library/react";
import { Profile } from "./Profile";
import { IUser } from "../../../core/interfaces/IUser";

describe("Profile", () => {
  it("matches the snapshot", () => {
    const user: IUser = {
      name: "John Doe",
      email: "john@example.com",
      photoUrl: "/path/to/photo.png",
      id: "1",
      createdAt: new Date(),
      updatedAt: new Date(),
    };

    const { container } = render(<Profile user={user} />);
    expect(container).toMatchSnapshot();
  });

  it("matches the snapshot when user is null", () => {
    const { container } = render(<Profile user={null} />);
    expect(container).toMatchSnapshot();
  });
});
