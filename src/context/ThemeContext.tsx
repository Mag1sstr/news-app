import { createContext, ReactNode, useContext, useState } from "react";

interface IThemeContext {
  isDark: boolean;
  toggleTheme: () => void;
}
interface ThemeProviderProps {
  children: ReactNode;
}
export const ThemeContext = createContext<IThemeContext | undefined>(undefined);

export function useTheme() {
  const context = useContext(ThemeContext);
  if (!context) {
    throw new Error("context error");
  }
  return context;
}

export default function ThemeProvider({ children }: ThemeProviderProps) {
  const [isDark, setIsDark] = useState(false);
  function toggleTheme() {
    setIsDark((prev) => !prev);
    // setIsDark(!isDark);
  }
  return (
    <ThemeContext.Provider value={{ isDark, toggleTheme }}>
      {children}
    </ThemeContext.Provider>
  );
}
