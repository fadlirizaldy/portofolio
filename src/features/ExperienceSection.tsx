import ExperienceItem from "@/components/ExperienceItem";
import { Experience } from "@/utils/data";

const ExperienceSection = () => {
  return (
    <ul className="steps steps-vertical gap-2 relative sm:left-32 overflow-visible">
      {Experience.map((item) => (
        <ExperienceItem key={item.id} {...item} />
      ))}
    </ul>
  );
};

export default ExperienceSection;
