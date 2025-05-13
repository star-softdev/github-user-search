import { render, screen } from "@testing-library/react";
import App from "./App";

test("renders GitHub User Search heading", () => {
  render(<App />);
  const heading = screen.getByText(/GitHub User Search/i);
  expect(heading).toBeInTheDocument();
});
