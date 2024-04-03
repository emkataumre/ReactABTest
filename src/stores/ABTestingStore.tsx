import { create } from "zustand";
import { persist } from "zustand/middleware";

type ABTestingStore = {
  version: null | "a" | "b";
  setVersion: (version: "a" | "b") => void;
};

export const useABTestingStore = create<ABTestingStore>()(
  persist(
    (set) => ({
      version: null,
      setVersion: (version) => set(() => ({ version })),
    }),
    {
      name: "ABTestVersion",
    }
  )
);
