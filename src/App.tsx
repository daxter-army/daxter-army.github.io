import { useEffect, useState } from 'react';
import ThemeContext from './context/theme';
import Header from './components/Header/Header';
import Footer from './components/Footer/Footer';
import { HashRouter, Route, Routes } from 'react-router-dom';

import Home from './pages/Home/Home';
import Works from './pages/Works/Works';
import Posts from './pages/Posts/Posts';

import './App.css';

function App() {
  const [theme, setTheme] = useState('light')

  const themeHandler = (theme: string) => {
    document.documentElement.setAttribute("data-theme", theme)
    setTheme(theme)
  }

  useEffect(() => {
    if (window.matchMedia('(prefers-color-scheme: dark)').matches) {
      themeHandler('dark')
    }
    else {
      themeHandler('light')
    }
  }, [])

  return (
    <ThemeContext.Provider value={{ theme: theme, themeClicker: themeHandler }}>
      <HashRouter>
        <Header />
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/works' element={<Works />} />
          <Route path='/posts' element={<Posts />} />
        </Routes>
      </HashRouter>
      <Footer />
    </ThemeContext.Provider>
  );
}

export default App;
