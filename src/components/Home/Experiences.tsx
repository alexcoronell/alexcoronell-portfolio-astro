import { useState, useEffect } from "preact/hooks";
import personalData from "../../core/data/personalData";
import { type Experience } from "../../core/types/PersonalData";
import "./_Experiences.scss";

const Experiences = () => {
  const { experiences } = personalData;
  const [currentExperienceIndex, setCurrentExperienceIndex] =
    useState<number>(0);
  const [currentExperience, setCurrentExperience] = useState<Experience>(
    experiences[currentExperienceIndex]
  );

  useEffect(() => {
    setCurrentExperience(experiences[currentExperienceIndex]);
  }, [currentExperienceIndex]);

  return (
    <div className="Experiences">
      <div className="Experiences__business">
        {experiences.map((item, index) => (
          <button
            class="Experiences__business__button"
            key={index}
            id={"-btn-" + index}
            onClick={() => setCurrentExperienceIndex(index)}
          >
            {item.business}
          </button>
        ))}
      </div>
      <div className="Experiences__details">
        <div className="Experiences__details__header">
          <h4>{currentExperience?.title}</h4>
          {/* <Icon icon="material-symbols:next-week-outline" /> */}
          <span class="icon-[material-symbols--next-week-outline]"></span>
          <h5>{currentExperience?.business}</h5>
        </div>
        <div className="Experiences__details__date">
          <p>
            {currentExperience?.dateBegin} - {currentExperience?.dateEnd}
          </p>
        </div>
        <div className="Experiences__details__functions">
          <ul>
            {currentExperience?.functions?.map((item, index) => {
              return (
                <li key={index}>
                  <span class="icon-[material-symbols--double-arrow]"></span>
                  <p>{item}</p>
                </li>
              );
            })}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Experiences;
