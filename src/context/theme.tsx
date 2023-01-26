import { createContext } from "react";

interface themeContextProps {
	theme: string;
	themeClicker: (theme: string) => void
}

const themeContext = createContext<themeContextProps>({
	theme: 'light',
	themeClicker: () => { }
})

export default themeContext