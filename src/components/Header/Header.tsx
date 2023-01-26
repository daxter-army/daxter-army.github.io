import { Link, NavLink } from 'react-router-dom'
import { BsGithub } from "react-icons/bs"
import ThemeSwitcher from '../ThemeSwitcher/ThemeSwitcher'

import './Header.css'

const Header = () => {
	const GITHUB_URL = 'https://www.github.com/daxter-army/daxter-army.github.io'
	const DAX_UI_URL = 'https://daxter-army.github.io/daxUI'

	return (
		<header className='HeaderWpr'>
			<div className='container'>
				<div className='leftInfo'>
					<div className='nameLogoWpr'>
						<NavLink to={'/'} className='titleWpr'>
							<img src={`${DAX_UI_URL}/static/media/m.e08629e9.svg`} alt='m-logo' loading='lazy' />
							<p className='title'>Mehul Singh Teya</p>
						</NavLink>
					</div>
					<nav>
						<Link to={'/works'}>Works</Link>
						<Link to={'/posts'}>Articles</Link>
						<a href={GITHUB_URL} className="iconLink" target="_blank" rel="noreferrer" ><BsGithub size={18} /><span>Source</span></a>
					</nav>
				</div>
				<ThemeSwitcher />
			</div>
		</header>
	)
}

export default Header