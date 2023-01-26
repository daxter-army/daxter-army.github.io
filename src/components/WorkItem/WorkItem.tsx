import './WorkItem.css'

interface WorkItemProps {
	logoSrc: string;
	title: string;
	subTitle?: string;
	link: string;
}

const WorkItem = ({ logoSrc, title, subTitle, link }: WorkItemProps) => {
	return (
		<a href={link} className="WorkItemWpr" target={"_blank"} rel="noreferrer">
			{logoSrc && <div className='imgWpr'><img src={logoSrc} alt="project-logo" /></div>}
			{title && <p className="title">{title}</p>}
			{subTitle && <p className="subTitle">{subTitle}</p>}
		</a>
	)
}

export default WorkItem