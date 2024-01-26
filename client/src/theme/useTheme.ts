import { useContext } from "react";
import { ThemeContext } from "./ThemeContext";

interface ThemeContextType {
  darkMode: boolean;
  toggleDarkMode: () => void;
}

export const useTheme = (): ThemeContextType => useContext(ThemeContext);
