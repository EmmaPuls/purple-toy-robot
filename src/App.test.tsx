import React from "react";
import { render, screen } from "@testing-library/react";
import App from "./App";
import MockedProviderContainer from "testUtils/MockedProviderContainer";

test("renders header", () => {
  render(
    <MockedProviderContainer>
      <App />
    </MockedProviderContainer>
  );
  screen.getByText("Emma's Toy Robot");
});
