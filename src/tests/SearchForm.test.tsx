import React from "react";
import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { SearchForm } from "../components/SearchForm";

describe("SearchForm", () => {
  it("calls onSearch when typing", async () => {
    const onSearchMock = jest.fn();
    render(<SearchForm onSearch={onSearchMock} />);
    const input = screen.getByLabelText(/Search GitHub Users/i);
    await userEvent.type(input, "hello");

    // called multiple times as user types
    expect(onSearchMock).toHaveBeenCalled();
    expect(onSearchMock).toHaveBeenCalledWith("hello");
  });
});
