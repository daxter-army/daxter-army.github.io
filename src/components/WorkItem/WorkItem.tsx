import { WorkItemsDataItem } from "../../data/data";

import "./WorkItem.css";

const WorkItem = ({
  logoSrc,
  logoSrcSet,
  title,
  subTitle,
  link,
}: WorkItemsDataItem) => {
  return (
    <a href={link} className="WorkItemWpr" target={"_blank"} rel="noreferrer">
      {logoSrc && (
        <div className="imgWpr">
          <img srcSet={logoSrcSet} src={logoSrc} alt="project logo" />
        </div>
      )}
      {title && <p className="title">{title}</p>}
      {subTitle && <p className="subTitle">{subTitle}</p>}
    </a>
  );
};

export default WorkItem;
