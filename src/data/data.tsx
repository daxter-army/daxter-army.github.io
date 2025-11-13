import RbcIcon2x from "../assets/rbc.webp";
import RbcIcon1x from "../assets/rbc-1x.webp";
import RbtIcon2x from "../assets/rbt.webp";
import RbtIcon1x from "../assets/rbt-1x.webp";
import RbdIcon2x from "../assets/rbd.webp";
import RbdIcon1x from "../assets/rbd-1x.webp";
import LclIcon2x from "../assets/lcl.webp";
import LclIcon1x from "../assets/lcl-1x.webp";
import SimplIcon2x from "../assets/simpl.webp";
import SimplIcon1x from "../assets/simpl-1x.webp";
import DriftIcon2x from "../assets/drift.webp";
import DriftIcon1x from "../assets/drift-1x.webp";
import KeycastIcon2x from "../assets/keycast.webp";
import KeycastIcon1x from "../assets/keycast-1x.webp";
import PyscrollIcon2x from "../assets/pyscroll.webp";
import PyscrollIcon1x from "../assets/pyscroll-1x.webp";
import ReactCPPWasmIcon2x from "../assets/rcppwasm.webp";
import ReactCPPWasmIcon1x from "../assets/rcppwasm-1x.webp";
import CheatsheetIcon2x from "../assets/hooks-cheatsheet.webp";
import CheatsheetIcon1x from "../assets/hooks-cheatsheet-1x.webp";
import { logoSrcSetGenerator } from "../utils/utils";

export interface WorkItemsDataItem {
  id: number;
  logoSrc: string;
  title: string;
  subTitle?: string;
  logoSrcSet?: string;
  link: string;
}

interface SkillItemsDataItem {
  id: number;
  label: string;
}

export const workItemsData: WorkItemsDataItem[] = [
  {
    id: 1,
    logoSrc: LclIcon2x,
    logoSrcSet: logoSrcSetGenerator(LclIcon1x, LclIcon2x),
    title: "component-library",
    subTitle:
      "A react + typescript + lerna + rollup component library, for managing & distributing your multi-version npm packages.",
    link: "https://www.github.com/daxter-army/component-library/",
  },
  {
    id: 2,
    logoSrc: ReactCPPWasmIcon2x,
    logoSrcSet: logoSrcSetGenerator(ReactCPPWasmIcon1x, ReactCPPWasmIcon2x),
    title: "react-cpp-wasm-todo-app",
    subTitle:
      "A react + cpp + wasm todo app, highlighting upon the toolchain and the integration of wasm with a react app.",
    link: "https://daxter-army.github.io/react-cpp-wasm-app/",
  },
  {
    id: 3,
    logoSrc: RbdIcon2x,
    logoSrcSet: logoSrcSetGenerator(RbdIcon1x, RbdIcon2x),
    title: "react-beautiful-dropdown",
    subTitle:
      "An accessible React + Typescript drop-down component with keyboard navigation.",
    link: "https://daxter-army.github.io/react-dropdown/",
  },
  {
    id: 4,
    logoSrc: SimplIcon2x,
    logoSrcSet: logoSrcSetGenerator(SimplIcon1x, SimplIcon2x),
    title: "simpl",
    subTitle:
      "A simplified and minimalistic media player powered by ElectronJS, to carry out your dev process smoothly.",
    link: "https://daxter-army.github.io/simpl/",
  },
  {
    id: 5,
    logoSrc: PyscrollIcon2x,
    logoSrcSet: logoSrcSetGenerator(PyscrollIcon1x, PyscrollIcon2x),
    title: "pyscroll",
    subTitle:
      "Tired of scrolling the scroll wheel ? Leave your mouse, and grab an object to scroll any infinite screen of your fav app.",
    link: "https://github.com/daxter-army/pyscroll/",
  },
  {
    id: 6,
    logoSrc: KeycastIcon2x,
    logoSrcSet: logoSrcSetGenerator(KeycastIcon1x, KeycastIcon2x),
    title: "key-cast",
    subTitle:
      "Cast your key presses and mouse clicks on the screen, while casting your favorite application on the screen. Better than the rest.",
    link: "https://daxter-army.github.io/key-cast/",
  },
  {
    id: 7,
    logoSrc: CheatsheetIcon2x,
    logoSrcSet: logoSrcSetGenerator(CheatsheetIcon1x, CheatsheetIcon2x),
    title: "hooks-cheatsheet",
    subTitle: "A React cheatsheet, going from beginners to advanced level.",
    link: "https://github.com/daxter-army/react-hooks-cheatsheet",
  },
  {
    id: 8,
    logoSrc: DriftIcon2x,
    logoSrcSet: logoSrcSetGenerator(DriftIcon1x, DriftIcon2x),
    title: "drift",
    subTitle: "React and Node chat app with AES Encryption.",
    link: "https://github.com/daxter-army/drift",
  },
  {
    id: 9,
    logoSrc: RbtIcon2x,
    logoSrcSet: logoSrcSetGenerator(RbtIcon1x, RbtIcon2x),
    title: "react-beautiful-tooltip",
    subTitle:
      "A React Tooltip component for your beautiful React applications.",
    link: "https://daxter-army.github.io/react-beautiful-tooltip/",
  },
  {
    id: 10,
    logoSrc: RbcIcon2x,
    logoSrcSet: logoSrcSetGenerator(RbcIcon1x, RbcIcon2x),
    title: "react-beautiful-calendar",
    subTitle:
      "A beautiful react calendar component library for your beautiful react apps.",
    link: "https://daxter-army.github.io/react-beautiful-calendar/",
  },
];

export const skillItemsData: SkillItemsDataItem[] = [
  {
    id: 1,
    label: "Javascript",
  },
  {
    id: 2,
    label: "C++",
  },
  {
    id: 3,
    label: "Python",
  },
  {
    id: 4,
    label: "React.JS",
  },
  {
    id: 5,
    label: "Next.JS",
  },
  {
    id: 6,
    label: "Redux (react-redux)",
  },
  {
    id: 7,
    label: "Zustand",
  },
  {
    id: 8,
    label: "React Native",
  },
  {
    id: 9,
    label: "Typescript",
  },
  {
    id: 10,
    label: "Golang",
  },
    {
    id: 11,
    label: "Docker",
  },
  {
    id: 12,
    label: "AWS",
  },
  {
    id: 13,
    label: "SEO (Structured data, sitemaps)",
  },
  {
    id: 14,
    label: "Git",
  },
];
