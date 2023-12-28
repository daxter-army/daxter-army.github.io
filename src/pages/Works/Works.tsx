import Showcase from "../../components/Showcase/Showcase";
import WorkItem from "../../components/WorkItem/WorkItem";

import { workItemsData } from "../../data/data";
import { STATICS } from "../../statics";

import "./Works.css";

const Works = () => {
  return (
    <div className="WorksWpr">
      <Showcase />
      <div className="containerMini">
        <h2 className="sectionHeading">{STATICS.WORKS}</h2>
        <div className="projectsCtr">
          {workItemsData.map((item) => {
            return (
              <WorkItem
                key={item.id}
                link={item.link}
                title={item.title}
                logoSrc={item.logoSrc}
                subTitle={item.subTitle}
              />
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default Works;
