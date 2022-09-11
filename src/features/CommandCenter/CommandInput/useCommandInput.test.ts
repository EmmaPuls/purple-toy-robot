import { act, renderHook } from "@testing-library/react-hooks";
import MockedProviderContainer from "testUtils/MockedProviderContainer";
import useCommandInput from "./useCommandInput";

describe("useCommandInput", () => {
  describe("error", () => {
    it("should be false by default", () => {
      const { result } = renderHook(() => useCommandInput(), {
        wrapper: MockedProviderContainer,
      });
      expect(result.current.error).toBe(false);
    });
  });

  describe("value", () => {
    it("should be empty string by default", () => {
      const { result } = renderHook(() => useCommandInput(), {
        wrapper: MockedProviderContainer,
      });
      expect(result.current.value).toBe("");
    });
  });

  describe("onChange", () => {
    it("should change the value", () => {
      const { result } = renderHook(() => useCommandInput(), {
        wrapper: MockedProviderContainer,
      });
      const { onChange } = result.current;

      onChange("test");

      expect(result.current.value).toBe("test");
    });

    it("should clear errors", () => {
      const { result } = renderHook(() => useCommandInput(), {
        wrapper: MockedProviderContainer,
      });

      // Wrap all actions in act to make sure they are batched
      act(async () => {
        result.current.onChange("test");
      });
      expect(result.current.value).toBe("test");

      act(async () => {
        result.current.handleSubmit("Enter");
      });
      expect(result.current.error).toBe(true);

      act(async () => {
        result.current.onChange("test2");
      });
      expect(result.current.value).toBe("test2");
      expect(result.current.error).toBe(false);
    });
  });

  describe("handleSubmit", () => {
    it("should ignore keypresses that are not Enter", async () => {
      const { result } = renderHook(() => useCommandInput(), {
        wrapper: MockedProviderContainer,
      });
      const key = "a";
      result.current.handleSubmit(key);
      expect(result.current.error).toBe(false);
    });

    describe("when key is 'enter'", () => {
      it("should set error to true if the command is invalid", async () => {
        const { result } = renderHook(() => useCommandInput(), {
          wrapper: MockedProviderContainer,
        });
        result.current.onChange("invalid command");
        const key = "Enter";
        result.current.handleSubmit(key);
        expect(result.current.error).toBe(true);
      });

      it("should set error to false if the command is valid", async () => {
        const { result } = renderHook(() => useCommandInput(), {
          wrapper: MockedProviderContainer,
        });
        result.current.onChange("PLACE,0,0,NORTH");
        const key = "Enter";
        result.current.handleSubmit(key);
        expect(result.current.error).toBe(false);
      });

      it("should clear the value", async () => {
        const { result } = renderHook(() => useCommandInput(), {
          wrapper: MockedProviderContainer,
        });
        const key = "Enter";
        result.current.onChange("any command");
        result.current.handleSubmit(key);
        expect(result.current.value).toBe("");
      });
    });
  });
});
