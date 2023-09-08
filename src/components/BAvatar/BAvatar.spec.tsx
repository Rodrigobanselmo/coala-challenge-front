import React from "react";
import { render, screen } from "@testing-library/react";
import { BAvatar } from "./BAvatar";

describe("BAvatar", () => {
  const props = {
    name: "John Doe",
    photoUrl: "/path/to/photo.png",
  };

  it("renders without errors", () => {
    render(<BAvatar {...props} />);
    const avatar = screen.getByTestId("BAvatar");

    expect(avatar).toBeInTheDocument();
  });

  it("renders the avatar image with the provided photo URL", () => {
    render(<BAvatar {...props} />);
    const avatarImage = screen.getByAltText(props.name);

    expect(avatarImage).toBeInTheDocument();
    expect(avatarImage).toHaveAttribute("src", props.photoUrl);
  });

  it("renders with default photo URL when photoUrl is not provided", () => {
    const propsWithoutPhoto = {
      name: "Jane Smith",
    };
    render(<BAvatar {...propsWithoutPhoto} />);
    const defaultAvatarImage = screen.getByAltText(propsWithoutPhoto.name);

    expect(defaultAvatarImage).toBeInTheDocument();
    expect(defaultAvatarImage).toHaveAttribute("src", "/icons/profile.svg");
  });
});
