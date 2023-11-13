import { useEffect, useState, lazy, Suspense } from "react";
import ThemeContext from "./context/theme";

import Loader from "./pages/Loader/Loader";
import Header from "./components/Header/Header";
import Footer from "./components/Footer/Footer";
import { HashRouter, Route, Routes } from "react-router-dom";

import "./App.css";

const Home = lazy(() => import("./pages/Home/Home"));
const Works = lazy(() => import("./pages/Works/Works"));
// const Posts = lazy(() => import('./pages/Posts/Posts'));

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
          {/* <Route path='/posts' element={<Suspense fallback={<div>loading</div>}><Posts /></Suspense>} /> */}
        </Routes>
      </HashRouter>
      <Footer />
    </ThemeContext.Provider>
  );
}

export default App;
