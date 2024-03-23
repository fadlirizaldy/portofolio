import { Skill } from "@/utils/data";
import React from "react";

const ImageSlider = () => {
  return (
    <div className="overflow-hidden flex gap-3 logos relative dark:before:hidden dark:after:hidden">
      <div className="gap-3 logos-slide flex">
        {Skill.map((data) => (
          <div key={data.id} className="w-20 h-20 min-w-20 rounded-full">
            <img src={data.url} alt={data.name} className="object-cover w-full h-full rounded-full" />
          </div>
        ))}
      </div>
      <div className="gap-3 logos-slide flex">
        {Skill.map((data) => (
          <div key={data.id} className="w-20 h-20 min-w-20 rounded-full">
            <img src={data.url} alt={data.name} className="object-cover w-full h-full rounded-full" />
          </div>
        ))}
      </div>
    </div>
  );
};

export default ImageSlider;
