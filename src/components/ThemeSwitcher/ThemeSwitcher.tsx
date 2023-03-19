import React, { useRef, useContext } from 'react'
import { BsMoonFill, BsSun } from "react-icons/bs"
import { SwitchTransition, CSSTransition } from 'react-transition-group'

import themeContext from '../../context/theme'

import './ThemeSwitcher.css'

const ThemeSwitcher = () => {
	const lightBtnRef = useRef(null)
	const darkBtnRef = useRef(null)

	const { theme, themeClicker } = useContext(themeContext)

	const btnRef = theme === 'light' ? lightBtnRef : darkBtnRef

	return (
		<SwitchTransition mode='out-in'>
			<CSSTransition key={theme} nodeRef={btnRef} classNames='fade' timeout={250}>
				<button aria-label='theme-changing-button' ref={btnRef} className='themeBtn' onClick={() => themeClicker(theme === 'light' ? 'dark' : 'light')}>
					{theme === 'light' ? <BsMoonFill /> : <BsSun />}
				</button>
			</CSSTransition>
		</SwitchTransition>
	)
}

export default ThemeSwitcher