import { useNavigate } from "react-router-dom"
import { BiChevronRight } from "react-icons/bi"
import { BsGithub, BsLinkedin } from "react-icons/bs"
import Button from "../../components/Button/Button"

import Showcase from '../../components/Showcase/Showcase'

import './Home.css'

const Home = () => {
	const navigate = useNavigate()
	// const { theme } = useContext(themeContext)
	const LINKED_URL = 'https://www.linkedin.com/in/mehulsinghteya'
	const GITHUB_URL = 'https://www.github.com/daxter-army'

	return (
		<div className='HomeWpr'>
			<Showcase />
			<div className='containerMini'>
				<p className='introSalutation'>Hello!, I am a Software Engineer, working as a Professional in India</p>
				<div className='intro'>
					<div>
						<h1>Mehul Singh Teya</h1>
						<p>Craftsman (Developer / Artist / Designer)</p>
					</div>
					<img src="https://avatars.githubusercontent.com/u/49727032?v=4" alt="logo" loading='lazy' />
				</div>
				<div className='info'>
					<h2>About</h2>
					<p className='desc'>Mehul Singh Teya, is a Software Engineer with passion of building stuffs and services he likes. He likes to build projects, that not only can help others, but also eases his own daily life. When not online, he likes to play minesweeper, solve Sudoku and play musical keyboard. <br /><br />Currently, he is working in a national leading online travel company <a href="https://www.makemytrip.com">MakeMyTrip</a>.</p>
				</div>
				<Button styles={{ marginTop: 20, marginBottom: 20 }} text="My Portfolio" isCenter={true} btnClicker={() => { navigate('/works') }} rightIcon={<BiChevronRight style={{ marginLeft: 4 }} />} />
				<div className='info'>
					<h2>Bio</h2>
					<p className='bullet'>
						<strong className='year'>2000</strong>
						<span>Born in New Delhi, India</span>
					</p>
					<p className='bullet'>
						<strong className='year'>2016</strong>
						<span>Completed Xth Standard, 10CGPA</span>
					</p>
					<p className='bullet'>
						<strong className='year'>2018</strong>
						<span>Completed XIIth Standard, PCM, 91.6%</span>
					</p>
					<p className='bullet'>
						<strong className='year'>2022</strong>
						<span>Completed B.Tech in Computer Science from <a href="https://www.thapar.edu/">TIET, Patiala</a></span>
					</p>
					<p className='bullet'>
						<strong className='year'>2022 to Present</strong>
						<span>SDE in <a href="https://www.makemytrip.com">MakeMyTrip</a></span>
					</p>
				</div>
				<div className='info'>
					<h2>I ♥</h2>
					<p className='desc'>I like Art, Music, Video Games, Sudoku, Photography, playing Musical Keyboard, Machine Learning</p>
				</div>
				<div className="info">
					<h2>Presence</h2>
					<nav>
						<a className="iconLink" href={LINKED_URL} target="_blank" rel="noreferrer" ><BsLinkedin size={18} /><span>@mehulsinghteya</span></a>
						<a className="iconLink" href={GITHUB_URL} target="_blank" rel="noreferrer" ><BsGithub size={18} /><span>@daxter-army</span></a>
					</nav>
				</div>
			</div>
		</div>
	)
}

export default Home