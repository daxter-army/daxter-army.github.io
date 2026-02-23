import Showcase from "../../components/Showcase/Showcase";
import WorkItem from "../../components/WorkItem/WorkItem";

import { workItemsData } from "../../data/data";
import { STATICS } from "../../statics";

import "./Works.css";

const Works = () => {
  return (
    <main className="WorksWpr">
      <Showcase />
      <div className="containerMini">
        <h2 className="sectionHeading">{STATICS.WORKS}</h2>
        <div className="projectsCtr">
          {workItemsData.map((item) => (
            <WorkItem key={item.id} {...item} />
          ))}
        </div>
      </div>
    </main>
  );
};

export default Works;
