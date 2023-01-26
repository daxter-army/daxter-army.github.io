import { useEffect } from 'react'
import Showcase from '../../components/Showcase/Showcase'
import WorkItem from '../../components/WorkItem/WorkItem'

import { workItemsData } from '../../data/data'

import "./Works.css"

const Works = () => {
	useEffect(() => {
		window.scrollTo({
			top: 0,
			left: 0,
			behavior: 'smooth'
		})
	}, [])

	return (
		<div className='WorksWpr'>
			<Showcase />
			<div className='containerMini'>
				<h2 className='sectionHeading'>Works</h2>
				<div className='projectsCtr'>
					{
						workItemsData.map(item => {
							return <WorkItem logoSrc={item.logoSrc} link={item.link} title={item.title} subTitle={item.subTitle} />
						})
					}
				</div>
			</div>
		</div>
	)
}

export default Works