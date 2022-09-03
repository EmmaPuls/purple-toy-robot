import { render, screen } from "@testing-library/react";
import MockedProviderContainer from "../testUtils/MockedProviderContainer";
import TableTop from "./TableTop";

describe("TableTop", () => {
  it("should render successfully", () => {
    render(
      <MockedProviderContainer>
        <TableTop />
      </MockedProviderContainer>
    );
    screen.getByTestId("TableTop");
  });
});
