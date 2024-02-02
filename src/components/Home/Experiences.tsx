import { useEffect, useState } from "preact/hooks";
import personalData from "../../core/data/personalData";
import { type Experience } from "../../core/types/PersonalData";
import "./_Experiences.scss";

const Experiences = () => {
    /* const { currentExperience, setCurrentExperience } = useState<Experience | undefined>(undefined) */
  const { experiences } = personalData;
  return (
    <div className="Experiences">
      <div className="Experiences__business">
        {experiences.map((item, index) => (
          <button
            class="Experiences__business__button"
            id={item.business + "-btn-" + index}
          >
            {item.business}
          </button>
        ))}
      </div>
    </div>
  );
};

export default Experiences;
