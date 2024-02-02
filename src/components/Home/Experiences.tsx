import { useEffect, useState } from "preact/hooks";
import personalData from "../../core/data/personalData";
import { type Experience } from "../../core/types/PersonalData";
import "./_Experiences.scss";

const Experiences = () => {
  const { experiences } = personalData;
  const [currentExperienceIndex, setCurrentExperienceIndex] =useState<number>(0);
  const [currentExperience, setCurrentExperience] = useState<Experience>(experiences[currentExperienceIndex]);

  const handleClick = (index: number): void => {
    setCurrentExperienceIndex(index)
    setCurrentExperience(experiences[currentExperienceIndex])
    console.log('Button clicked!', index);
  }
  return (
    <div className="Experiences">
      <div className="Experiences__business">
        {experiences.map((item, index) => (
          <button
            class="Experiences__business__button"
            id={"-btn-" + index}
            onClick={() => handleClick(index)}
          >
            {item.business}
          </button>
        ))}
      </div>
      <div className="Experiences__details">
        <div className="Experiences__details__header">
            <h4>{ currentExperience?.title }</h4>
            -
            <h5>{ currentExperience?.business }</h5>
        </div>
        <div className="Experiences__details__date">
            <p>{ currentExperience?.dateBegin } - { currentExperience?.dateEnd }</p>
        </div>
        <div className="Experiences__details__functions">
            <ul>
                {
                    currentExperience?.functions?.map(item => {
                        return (
                            <li>punto - <p>{item}</p></li>
                        )
                    })
                }
            </ul>
        </div>
      </div>
    </div>
  );
};

export default Experiences;
