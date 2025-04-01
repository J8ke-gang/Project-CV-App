import React, { useState } from "react";

const ExperienceInfo = ({ onExperienceSubmit }) => {
  const [experience, setExperience] = useState([
    { company: "", position: "", startDate: "", endDate: "" },
  ]);
  //handle change
  const handleChange = (index, field, value) => {
    const updatedExperience = [...experience];
    updatedExperience[index][field] = value;
    setExperience(updatedExperience);
  };
  // adding experience
  const addExperience = () => {
    setExperience([
      ...experience,
      { company: "", position: "", startDate: "", endDate: "" },
    ]);
  };
  //handle delete
  const handleDelete = (index) => {
    const updatedExperience = experience.filter((_, i) => i !== index);
    setExperience(updatedExperience);
  };
  //handle submit
  const handleSubmit = (e) => {
    e.preventDefault();
    onExperienceSubmit(experience);
  };

  return (
    <div className="experience-section">
      <h2>Experience</h2>
      <form id="experience-form" onSubmit={handleSubmit}>
        {experience.map((exp, index) => (
          <div key={index}>
            <label htmlFor={`company-${index}`}>
              Company:
              <input
                id={`company-${index}`}
                type="text"
                placeholder=" Enter Company"
                value={exp.company}
                onChange={(e) => handleChange(index, "company", e.target.value)}
              />
            </label>

            <label htmlFor={`position-${index}`}>
              Position:
              <input
                id={`position-${index}`}
                type="text"
                placeholder="Enter Position"
                value={exp.position}
                onChange={(e) =>
                  handleChange(index, "position", e.target.value)
                }
              />
            </label>

            <label htmlFor={`startDate-${index}`}>
              Start Date:
              <input
                id={`startDate-${index}`}
                type="text"
                placeholder="Enter Start Date"
                value={exp.startDate}
                onChange={(e) =>
                  handleChange(index, "startDate", e.target.value)
                }
              />
            </label>

            <label htmlFor={`endDate-${index}`}>
              End Date:
              <input
                id={`endDate-${index}`}
                type="text"
                placeholder="Enter End Date"
                value={exp.endDate}
                onChange={(e) => handleChange(index, "endDate", e.target.value)}
              />
            </label>
            <div className="button-container">
              <button className="submit-button" type="submit">
                Save Experience
              </button>
              <button type="button" onClick={addExperience}>
                Add More Experience
              </button>
              <button
                className="delete-button"
                type="button"
                onClick={() => handleDelete(index)}
              >
                Delete
              </button>
            </div>
          </div>
        ))}
      </form>
    </div>
  );
};

export default ExperienceInfo;
