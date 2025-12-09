import { ExperienceType } from "@/utils/type";
import React from "react";

const ExperienceItem: React.FC<ExperienceType> = (props) => {
  const { id, company, title, duration } = props;
  return (
    <li data-content="★" className="step step-neutral">
      <div
        className={`flex flex-col items-start ${
          id % 2 === 0 ? "sm:absolute sm:-left-[270px]" : ""
        }`}
      >
        <h4 className="text-xl font-medium">{title}</h4>
        <h5 className="text-base text-slate-500 dark:text-slate-200">
          {company}
        </h5>
        <p className="text-slate-700 dark:text-slate-400 text-sm">{duration}</p>
      </div>
    </li>
  );
};

export default ExperienceItem;
