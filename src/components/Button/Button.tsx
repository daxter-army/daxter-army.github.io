import "./Button.css";

interface ButtonProps {
  text: string;
  isCenter?: boolean;
  btnClicker: () => void;
  rightIcon: JSX.Element;
  styles?: React.CSSProperties;
}

const Button = ({
  text,
  styles,
  rightIcon,
  btnClicker,
  isCenter = false,
}: ButtonProps) => {
  return (
    <button
      style={styles}
      aria-label={text}
      onClick={btnClicker}
      className={`buttonWpr ${isCenter ? "isCenter" : ""}`}
    >
      {text && <span>{text}</span>}
      {rightIcon}
    </button>
  );
};

export default Button;
