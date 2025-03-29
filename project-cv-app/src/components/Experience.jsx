import React, { useState } from "react";

const ExperienceInfo = ({ onExperienceSubmit }) => {
  const [experience, setExperience] = useState([
    { company: "", position: "", startDate: "", endDate: "" },
  ]);

  const handleChange = (index, field, value) => {
    const updatedExperience = [...experience];
    updatedExperience[index][field] = value;
    setExperience(updatedExperience);
  };

  const addExperience = () => {
    setExperience([
      ...experience,
      { company: "", position: "", startDate: "", endDate: "" },
    ]);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    onExperienceSubmit(experience); 
  };

  return (
    <div className="experience-container">
      <h2>Experience</h2>
      <form onSubmit={handleSubmit}>
        {experience.map((exp, index) => (
          <div key={index}>
            <label>
              Company:
              <input
                type="text"
                value={exp.company}
                onChange={(e) => handleChange(index, "company", e.target.value)}
              />
            </label>
            <label>
              Position:
              <input
                type="text"
                value={exp.position}
                onChange={(e) => handleChange(index, "position", e.target.value)}
              />
            </label>
            <label>
              Start Date:
              <input
                type="text"
                value={exp.startDate}
                onChange={(e) => handleChange(index, "startDate", e.target.value)}
              />
            </label>
            <label>
              End Date:
              <input
                type="text"
                value={exp.endDate}
                onChange={(e) => handleChange(index, "endDate", e.target.value)}
              />
            </label>
            <button type="button" onClick={addExperience}>
              Add More Experience
            </button>
          </div>
        ))}
        <button type="submit">Save Experience</button>
      </form>
    </div>
  );
};

export default ExperienceInfo;
