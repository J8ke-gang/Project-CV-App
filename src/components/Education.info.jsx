import React, { useState } from "react";

const EducationInfo = ({ onEducationSubmit }) => {
  const [education, setEducation] = useState([
    { school: "", degree: "", startDate: "", endDate: "" },
  ]);

  // Handle input changes
  const handleChange = (index, field, value) => {
    const updatedEducation = [...education];
    updatedEducation[index][field] = value;
    setEducation(updatedEducation);
  };

  // Add new education entry
  const addEducation = () => {
    setEducation([
      ...education,
      { school: "", degree: "", startDate: "", endDate: "" },
    ]);
  };

  // Delete education entry
  const handleDelete = (index) => {
    const updatedEducation = education.filter((_, i) => i !== index);
    setEducation(updatedEducation);
  };

  // Submit form data
  const handleSubmit = (e) => {
    e.preventDefault();
    onEducationSubmit(education);
  };

  return (
    <div className="education-section">
      <h2>Education</h2>
      <form onSubmit={handleSubmit}>
        {education.map((edu, index) => (
          <div key={index} className="education-row">
            <label htmlFor={`school-${index}`}>
              School:
              <input
                id={`school-${index}`}
                type="text"
                placeholder="Enter School"
                value={edu.school}
                onChange={(e) => handleChange(index, "school", e.target.value)}
              />
            </label>

            <label htmlFor={`degree-${index}`}>
              Degree:
              <input
                id={`degree-${index}`}
                type="text"
                placeholder="Enter Degree"
                value={edu.degree}
                onChange={(e) => handleChange(index, "degree", e.target.value)}
              />
            </label>

            <label htmlFor={`startDate-${index}`}>
              Start Date:
              <input
                id={`startDate-${index}`}
                type="text"
                placeholder="Enter Start Date"
                value={edu.startDate}
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
                value={edu.endDate}
                onChange={(e) => handleChange(index, "endDate", e.target.value)}
              />
            </label>

            <div className="button-container">
              <button className="submit-button" type="submit">
                Save Education
              </button>
              <button type="button" onClick={addEducation}>
                Add More Education
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

export default EducationInfo;
