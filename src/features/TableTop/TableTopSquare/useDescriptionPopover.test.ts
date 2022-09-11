import { renderHook } from "@testing-library/react-hooks";
import MockedProviderContainer from "testUtils/MockedProviderContainer";
import useDescriptionPopover from "./useDescriptionPopover";

describe("useDescriptionPopover", () => {
  it("should handle open", () => {
    // Render
    const { result } = renderHook(() => useDescriptionPopover(), {
      wrapper: MockedProviderContainer,
    });

    // Act
    result.current.handleDescriptionOpen({
      currentTarget: "fake-target",
    } as any);

    // Assert
    expect(result.current.open).toBe(true);
    expect(result.current.squareDescription).toBe("fake-target");
  });

  it("should handle close", () => {
    // Render
    const { result } = renderHook(() => useDescriptionPopover(), {
      wrapper: MockedProviderContainer,
    });

    // Act
    result.current.handleDescriptionClose();

    // Assert
    expect(result.current.open).toBe(false);
    expect(result.current.squareDescription).toBe(null);
  });
});
