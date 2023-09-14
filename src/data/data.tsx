import RbcIcon from "../assets/rbc.png"
import RbtIcon from "../assets/rbt.png"
import RbdIcon from "../assets/rbd.png"
import LclIcon from "../assets/lcl.png"
import SimplIcon from "../assets/simpl.png"
import DriftIcon from "../assets/drift.png"
import KeycastIcon from "../assets/keycast.png"
import PyscrollIcon from "../assets/pyscroll.png"
import ReactCPPWasmIcon from "../assets/rcppwasm.png"
import CheatsheetIcon from "../assets/hooks-cheatsheet.png"

interface WorkItemsDataItem {
	id: number;
	logoSrc: string;
	title: string;
	subTitle?: string;
	link: string;
}

export const workItemsData: WorkItemsDataItem[] = [
	{
		id: 9,
		logoSrc: LclIcon,
		title: 'component-library',
		subTitle: 'A react + typescript + lerna + rollup component library, for managing & distributing your multi-version npm packages.',
		link: 'https://www.github.com/daxter-army/component-library/'
	},
	{
		id: 10,
		logoSrc: ReactCPPWasmIcon,
		title: 'react-c++-wasm-todo-app',
		subTitle: 'A react + cpp + wasm todo app, highlighting upon the toolchain and the integration of wasm with a react app.',
		link: 'https://www.daxter-army.github.io/react-cpp-wasm-app/'
	},
	{
		id: 8,
		logoSrc: RbdIcon,
		title: 'react-beautiful-dropdown',
		subTitle: 'An accessible React + Typescript drop-down component with keyboard navigation.',
		link: 'https://daxter-army.github.io/react-dropdown/'
	},
	{
		id: 1,
		logoSrc: SimplIcon,
		title: 'simpl',
		subTitle: 'A simplified and minimalistic media player powered by ElectronJS, to carry out your dev process smoothly.',
		link: 'https://daxter-army.github.io/simpl/'
	},
	{
		id: 3,
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
		link: 'https://daxter-army.github.io/key-cast/'
	},
	{
		id: 5,
		logoSrc: CheatsheetIcon,
		title: 'hooks-cheatsheet',
		subTitle: 'A React cheatsheet, going from beginners to advanced level.',
		link: 'https://daxter-army.github.io/react-hooks-cheatsheet/'
	},
	{
		id: 6,
		logoSrc: DriftIcon,
		title: 'drift',
		subTitle: 'React and Node chat app with AES Encryption.',
		link: 'https://github.com/daxter-army/drift'
	},
	{
		id: 7,
		logoSrc: RbtIcon,
		title: 'react-beautiful-tooltip',
		subTitle: 'A React Tooltip component for your beautiful React applications.',
		link: 'https://daxter-army.github.io/react-beautiful-tooltip/'
	},
	{
		id: 2,
		logoSrc: RbcIcon,
		title: 'react-beautiful-calendar',
		subTitle: 'A beautiful react calendar component library for your beautiful react apps.',
		link: 'https://daxter-army.github.io/react-beautiful-calendar/'
	},
]
