import { useTheme } from "../../context/theme";

import NameSVG from "../../assets/name.svg";
import NameSVGDark from "../../assets/nameDark.svg";

import "./Showcase.css";

const Showcase = () => {
  const { isLightTheme } = useTheme();

  return (
    <div className="showcaseWpr">
      <img
        fetchpriority="high"
        alt="name logo"
        src={isLightTheme ? NameSVG : NameSVGDark}
      />
    </div>
  );
};

export default Showcase;
