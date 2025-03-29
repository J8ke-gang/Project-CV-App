import React, { useState } from "react";

const EducationInfo = ({ onEducationSubmit }) => {
  const [education, setEducation] = useState([
    { school: "", degree: "", startDate: "", endDate: "" },
  ]);

  const handleChange = (index, field, value) => {
    const updatedEducation = [...education];
    updatedEducation[index][field] = value;
    setEducation(updatedEducation);
  };

  const addEducation = () => {
    setEducation([
      ...education,
      { school: "", degree: "", startDate: "", endDate: "" },
    ]);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    onEducationSubmit(education);
  };

  return (
    <div className="education-container">
      <h2>Education</h2>
      <form onSubmit={handleSubmit}>
        {education.map((edu, index) => (
          <div key={index}>
            <label>
              School:
              <input
                type="text"
                value={edu.school}
                onChange={(e) =>
                  handleChange(index, "school", e.target.value)
                }
              />
            </label>
            <label>
              Degree:
              <input
                type="text"
                value={edu.degree}
                onChange={(e) => handleChange(index, "degree", e.target.value)}
              />
            </label>
            <label>
              Start Date:
              <input
                type="text"
                value={edu.startDate}
                onChange={(e) =>
                  handleChange(index, "startDate", e.target.value)
                }
              />
            </label>
            <label>
              End Date:
              <input
                type="text"
                value={edu.endDate}
                onChange={(e) =>
                  handleChange(index, "endDate", e.target.value)
                }
              />
            </label>
            <button type="button" onClick={addEducation}>
              Add More Education
            </button>
          </div>
        ))}
        <button type="submit">Save Education</button>
      </form>
    </div>
  );
};

export default EducationInfo;
