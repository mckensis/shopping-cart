import React from "react";
import { render, screen } from "@testing-library/react";
import Homepage from '../components/Homepage';
import { HashRouter } from "react-router-dom";

// Test that Homepage renders
describe("Homepage component", () => {
  it("renders correct heading", () => {
    render(
      // Include HashRouter in the render due to the Link components that exist in Homepage
      <HashRouter basename="/">
        <Homepage />
      </HashRouter>
      );
    expect(screen.getByRole("heading").textContent).toMatch(/welcome to planty/i);
  });
});

// Test that the link to the shop renders
describe("Homepage component shop link", () => {
  it("renders a link to the shop", () => {
    render(
      <HashRouter basename="/">
        <Homepage />
      </HashRouter>
    );
    expect(screen.getByRole("link").textContent).toMatch(/shop now/i);
  });
});