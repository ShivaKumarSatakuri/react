import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";
import React from "react";
import App from "./App";

test("renders app heading", () => {
  render(<App />);
  expect(screen.getByText(/bank/i)).toBeInTheDocument();
});
