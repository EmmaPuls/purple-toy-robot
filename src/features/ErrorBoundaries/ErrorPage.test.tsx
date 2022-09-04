// Write a test for the ErrorPage component

import { render, screen } from "@testing-library/react";
import MockedProviderContainer from "testUtils/MockedProviderContainer";
import ErrorPage from "./ErrorPage";

describe("ErrorPage", () => {
  it("renders the error page", () => {
    render(
      <MockedProviderContainer>
        <ErrorPage
          title="Test title"
          body="Test body"
        />
      </MockedProviderContainer>
    );
    screen.getByText("Test title");
    screen.getByText("Test body");
  });
});
