import { createContext, useContext } from "react";

import { STATICS } from "../statics";

interface themeContextProps {
  theme: string;
  isLightTheme: boolean;
  themeHandler: (theme: string) => void;
}

const themeContext = createContext<themeContextProps>({
  theme: STATICS.LIGHT_THEME_MODE,
  isLightTheme: true,
  themeHandler: () => {},
});

export const useTheme = () => useContext(themeContext);

export default themeContext;
