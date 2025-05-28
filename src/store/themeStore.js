import { create } from 'zustand';

export const useThemeStore = create((set) => ({
  darkMode: localStorage.getItem('theme') === 'dark',
  toggleDarkMode: () =>
    set((state) => {
      const newTheme = !state.darkMode;
      return { darkMode: newTheme };
    }),
}));
