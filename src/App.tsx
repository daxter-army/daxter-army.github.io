import { useEffect, useState, lazy, Suspense } from "react";
import { HashRouter, Route, Routes } from "react-router-dom";

import Loader from "./pages/Loader/Loader";
import Header from "./components/Header/Header";
import Footer from "./components/Footer/Footer";

import ThemeContext from "./context/theme";

import "./App.css";

const Home = lazy(() => import("./pages/Home/Home"));
const Works = lazy(() => import("./pages/Works/Works"));

function App() {
  const [theme, setTheme] = useState("light");

  const themeHandler = (theme: string) => {
    document.documentElement.setAttribute("data-theme", theme);
    setTheme(theme);
  };

  useEffect(() => {
    if (window.matchMedia("(prefers-color-scheme: dark)").matches) {
      themeHandler("dark");
    } else {
      themeHandler("light");
    }
  }, []);

  return (
    <ThemeContext.Provider value={{ theme: theme, themeClicker: themeHandler }}>
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
