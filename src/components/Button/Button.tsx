import "./Button.css"

interface ButtonProps {
	btnClicker: () => void;
	text: string;
	rightIcon: JSX.Element;
	isCenter?: boolean;
	styles?: React.CSSProperties;
}

const Button = ({ btnClicker, text, rightIcon, isCenter = false, styles }: ButtonProps) => {
	return (
		<button aria-label="action-button" className={`buttonWpr ${isCenter ? 'isCenter' : ''}`} style={styles} onClick={btnClicker}>
			<span>
				{text}
			</span>
			{rightIcon}
		</button>
	)
}

export default Button