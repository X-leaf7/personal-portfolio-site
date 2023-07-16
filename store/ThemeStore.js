import { create } from "zustand";
import { devtools } from "zustand/middleware";

const useThemeStore = create(
  devtools((set) => ({
    isDarkMode: false,
    darkModeToggler: () => set((state) => ({ isDarkMode: !state.isDarkMode })),
  }))
);

export default useThemeStore;
