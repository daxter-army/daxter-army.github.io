import { useTheme } from "../../context/theme";

import "./Showcase.css";

const Showcase = () => {
  const { isLightTheme } = useTheme();
  const imgSrc = isLightTheme ? "/name.svg" : "/nameDark.svg"

  return (
    <div className="showcaseWpr">
      <img
        src={imgSrc}
        alt="name logo"
      />
    </div>
  );
};

export default Showcase;
