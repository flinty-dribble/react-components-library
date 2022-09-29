import React from "react";
import "@testing-library/jest-dom";
import userEvent from "@testing-library/user-event";
import { render, screen } from "@testing-library/react";

import HideBlock from ".";

describe("hide block", () => {
  it("state of hidden", async () => {
    render(<HideBlock />);

    const hideBlock = screen.getByText("very interesting information");
    const button = screen.getByText("hide");

    await userEvent.click(button);

    expect(hideBlock.hidden).toBe(true);
    expect(button.innerHTML).toBe("show");

    await userEvent.click(button);

    expect(hideBlock.hidden).toBe(false);
    expect(button.innerHTML).toBe("hide");
  });
});
