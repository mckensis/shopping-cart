import React from "react";
import { render, screen } from "@testing-library/react";
import Homepage from '../components/Homepage';
import { HashRouter } from "react-router-dom";

// Include HashRouter in the render due to the Link components that exist in Homepage
describe("App component", () => {
  it("renders correct heading", () => {
    render(
      <HashRouter basename="/">
        <Homepage />
      </HashRouter>
      );
    expect(screen.getByRole("heading").textContent).toMatch(/welcome to planty/i);
  });
});