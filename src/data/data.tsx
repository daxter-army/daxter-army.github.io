import RbcIcon from "../assets/rbc.webp";
import RbtIcon from "../assets/rbt.webp";
import RbdIcon from "../assets/rbd.webp";
import LclIcon from "../assets/lcl.webp";
import SimplIcon from "../assets/simpl.webp";
import DriftIcon from "../assets/drift.webp";
import KeycastIcon from "../assets/keycast.webp";
import PyscrollIcon from "../assets/pyscroll.webp";
import ReactCPPWasmIcon from "../assets/rcppwasm.webp";
import CheatsheetIcon from "../assets/hooks-cheatsheet.webp";

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
    logoSrc: LclIcon,
    title: "component-library",
    subTitle:
      "A react + typescript + lerna + rollup component library, for managing & distributing your multi-version npm packages.",
    link: "https://www.github.com/daxter-army/component-library/",
  },
  {
    id: 2,
    logoSrc: ReactCPPWasmIcon,
    title: "react-cpp-wasm-todo-app",
    subTitle:
      "A react + cpp + wasm todo app, highlighting upon the toolchain and the integration of wasm with a react app.",
    link: "https://daxter-army.github.io/react-cpp-wasm-app/",
  },
  {
    id: 3,
    logoSrc: RbdIcon,
    title: "react-beautiful-dropdown",
    subTitle:
      "An accessible React + Typescript drop-down component with keyboard navigation.",
    link: "https://daxter-army.github.io/react-dropdown/",
  },
  {
    id: 4,
    logoSrc: SimplIcon,
    title: "simpl",
    subTitle:
      "A simplified and minimalistic media player powered by ElectronJS, to carry out your dev process smoothly.",
    link: "https://daxter-army.github.io/simpl/",
  },
  {
    id: 5,
    logoSrc: PyscrollIcon,
    title: "pyscroll",
    subTitle:
      "Tired of scrolling the scroll wheel ? Leave your mouse, and grab an object to scroll any infinite screen of your fav app.",
    link: "https://github.com/daxter-army/pyscroll/",
  },
  {
    id: 6,
    logoSrc: KeycastIcon,
    title: "key-cast",
    subTitle:
      "Cast your key presses and mouse clicks on the screen, while casting your favorite application on the screen. Better than the rest.",
    link: "https://daxter-army.github.io/key-cast/",
  },
  {
    id: 7,
    logoSrc: CheatsheetIcon,
    title: "hooks-cheatsheet",
    subTitle: "A React cheatsheet, going from beginners to advanced level.",
    link: "https://daxter-army.github.io/react-hooks-cheatsheet/",
  },
  {
    id: 8,
    logoSrc: DriftIcon,
    title: "drift",
    subTitle: "React and Node chat app with AES Encryption.",
    link: "https://github.com/daxter-army/drift",
  },
  {
    id: 9,
    logoSrc: RbtIcon,
    title: "react-beautiful-tooltip",
    subTitle:
      "A React Tooltip component for your beautiful React applications.",
    link: "https://daxter-army.github.io/react-beautiful-tooltip/",
  },
  {
    id: 10,
    logoSrc: RbcIcon,
    title: "react-beautiful-calendar",
    subTitle:
      "A beautiful react calendar component library for your beautiful react apps.",
    link: "https://daxter-army.github.io/react-beautiful-calendar/",
  },
];
