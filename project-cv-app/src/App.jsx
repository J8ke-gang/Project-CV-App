import React, { useState } from "react";
import GeneralInfo from "./components/General.info";
import EducationInfo from "./components/Education.info";
import ExperienceInfo from "./components/Experience";
import Resume from "./components/Resume";

const App = () => {
  const [generalInfo, setGeneralInfo] = useState({});
  const [education, setEducation] = useState([]);
  const [experience, setExperience] = useState([]);

  const handleGeneralInfoSubmit = (data) => {
    setGeneralInfo(data);
  };

  const handleEducationSubmit = (data) => {
    setEducation(data);
  };

  const handleExperienceSubmit = (data) => {
    setExperience(data);
  };

  return (
    <div>
      <h1>Resume Generator</h1>
      <GeneralInfo onGeneralInfoSubmit={handleGeneralInfoSubmit} />
      <EducationInfo onEducationSubmit={handleEducationSubmit} />
      <ExperienceInfo onExperienceSubmit={handleExperienceSubmit} />
      <Resume generalInfo={generalInfo} education={education} experience={experience} />
    </div>
  );
};

export default App;
