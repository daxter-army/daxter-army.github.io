import RbcIcon from "../assets/rbc.png"
import SimplIcon from "../assets/simpl.png"
import DriftIcon from "../assets/drift.png"
import CheatsheetIcon from "../assets/hooks-cheatsheet.png"
import KeycastIcon from "../assets/keycast.png"
import PyscrollIcon from "../assets/pyscroll.png"

interface WorkItemsDataItem {
	id: number;
	logoSrc: string;
	title: string;
	subTitle?: string;
	link: string;
}

export const workItemsData: WorkItemsDataItem[] = [
	{
		id: 1,
		logoSrc: SimplIcon,
		title: 'simpl',
		subTitle: 'A simplified and minimalistic media player powered by ElectronJS, to carry out your dev process smoothly.',
		link: 'https://daxter-army.github.io/simpl/'
	},
	{
		id: 2,
		logoSrc: RbcIcon,
		title: 'react-beautiful-calendar',
		subTitle: 'A beautiful react calendar component library for your beautiful react apps.',
		link: 'https://daxter-army.github.io/react-beautiful-calendar/'
	},
	{
		id: 6,
		logoSrc: PyscrollIcon,
		title: 'pyscroll',
		subTitle: 'Tired of scrolling the scroll wheel ? Leave your mouse, and grab an object to scroll any infinite screen of your fav app.',
		link: 'https://github.com/daxter-army/pyscroll/'
	},
	{
		id: 4,
		logoSrc: KeycastIcon,
		title: 'key-cast',
		subTitle: 'Cast your key presses and mouse clicks on the screen, while casting your favorite application on the screen. Better than the rest.',
		link: 'https://daxter-army.github.io/keycast/'
	},
	{
		id: 5,
		logoSrc: CheatsheetIcon,
		title: 'hooks-cheatsheet',
		subTitle: 'A React cheatsheet, going from beginners to advanced level.',
		link: 'https://daxter-army.github.io/react-hooks-cheatsheet/'
	},
	{
		id: 3,
		logoSrc: DriftIcon,
		title: 'drift',
		subTitle: 'React and Node chat app with AES Encryption.',
		link: 'https://github.com/daxter-army/drift'
	},
]