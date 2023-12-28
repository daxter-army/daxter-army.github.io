import { useContext } from "react";

import themeContext from "../../context/theme";

import NameSVG from "../../assets/name.svg";
import NameSVGDark from "../../assets/nameDark.svg";

import "./Showcase.css";

const Showcase = () => {
  const { theme } = useContext(themeContext);

  return (
    <div className="showcaseWpr">
      <img alt="name logo" src={theme === "dark" ? NameSVGDark : NameSVG} />
    </div>
  );
};

export default Showcase;
