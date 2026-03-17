import HeaderLeftContent from "./HeaderLeftContent";
import ThemeSwitcher from "../ThemeSwitcher/ThemeSwitcher";

import "./Header.css";

const Header = () => {
  return (
    <header className="HeaderWpr">
      <div className="container">
        <HeaderLeftContent />
        <ThemeSwitcher />
      </div>
    </header>
  );
};

export default Header;
