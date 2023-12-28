import { useRef } from "react";
import { BsMoonFill, BsSun } from "react-icons/bs";
import { SwitchTransition, CSSTransition } from "react-transition-group";

import { STATICS } from "../../statics";
import { useTheme } from "../../context/theme";

import "./ThemeSwitcher.css";

const ThemeSwitcher = () => {
  const darkBtnRef = useRef(null);
  const lightBtnRef = useRef(null);
  const { theme, themeHandler, isLightTheme } = useTheme();
  const btnRef = isLightTheme ? lightBtnRef : darkBtnRef;

  const buttonIconComponent = isLightTheme ? <BsMoonFill /> : <BsSun />;

  const themeButtonHandler = () => {
    themeHandler(
      isLightTheme ? STATICS.DARK_THEME_MODE : STATICS.LIGHT_THEME_MODE
    );
  };

  return (
    <SwitchTransition mode="out-in">
      <CSSTransition
        key={theme}
        timeout={250}
        nodeRef={btnRef}
        classNames="fade"
      >
        <button
          ref={btnRef}
          className="themeBtn"
          onClick={themeButtonHandler}
          aria-label="theme changing button"
        >
          {buttonIconComponent}
        </button>
      </CSSTransition>
    </SwitchTransition>
  );
};

export default ThemeSwitcher;
