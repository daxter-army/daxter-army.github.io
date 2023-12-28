import { HashRouter, Route, Routes } from "react-router-dom";
import { useEffect, useState, lazy, Suspense, useMemo } from "react";

import Loader from "./pages/Loader/Loader";
import Header from "./components/Header/Header";
import Footer from "./components/Footer/Footer";

import ThemeContext from "./context/theme";
import { STATICS } from "./statics";

import "./App.css";

const Home = lazy(() => import("./pages/Home/Home"));
const Works = lazy(() => import("./pages/Works/Works"));

function App() {
  const [theme, setTheme] = useState(STATICS.LIGHT_THEME_MODE);

  const themeHandler = (theme: string) => {
    document.documentElement.setAttribute("data-theme", theme);
    setTheme(theme);
  };

  const themeStore = useMemo(
    () => ({
      theme,
      themeHandler,
      isLightTheme: theme === STATICS.LIGHT_THEME_MODE,
    }),
    [theme]
  );

  useEffect(() => {
    if (
      window.matchMedia(`(prefers-color-scheme: ${STATICS.DARK_THEME_MODE})`)
        .matches
    ) {
      themeHandler(STATICS.DARK_THEME_MODE);
      return;
    }

    themeHandler(STATICS.LIGHT_THEME_MODE);
  }, []);

  return (
    <ThemeContext.Provider value={themeStore}>
      <HashRouter>
        <Header />
        <Routes>
          <Route
            path="/"
            element={
              <Suspense fallback={<Loader />}>
                <Home />
              </Suspense>
            }
          />
          <Route
            path="/works"
            element={
              <Suspense fallback={<Loader />}>
                <Works />
              </Suspense>
            }
          />
        </Routes>
      </HashRouter>
      <Footer />
    </ThemeContext.Provider>
  );
}

export default App;
