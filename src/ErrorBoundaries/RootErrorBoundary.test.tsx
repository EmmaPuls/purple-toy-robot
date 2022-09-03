import { render } from "@testing-library/react";
import MockedProviderContainer from "testUtils/MockedProviderContainer";
import RootErrorBoundary from "./RootErrorBoundary";

describe("RootErrorBoundary", () => {
  const ThrowErrorTest = () => {
    throw new Error("Error");
  };

  it("should render error boundary without theme by default", () => {
    render(
      <RootErrorBoundary>
        <ThrowErrorTest />
      </RootErrorBoundary>
    );

    expect(document.body).toMatchSnapshot();
  });

  it("should render error boundary with theme if requested", () => {
    render(
      <MockedProviderContainer>
        <RootErrorBoundary themeLoaded>
          <ThrowErrorTest />
        </RootErrorBoundary>
      </MockedProviderContainer>
    );

    expect(document.body).toMatchSnapshot();
  });

  it("should render error boundary without theme if error in theme", () => {
    render(
      <RootErrorBoundary>
        <RootErrorBoundary themeLoaded>
          <ThrowErrorTest />
        </RootErrorBoundary>
      </RootErrorBoundary>
    );

    expect(document.body).toMatchSnapshot();
  });
});
