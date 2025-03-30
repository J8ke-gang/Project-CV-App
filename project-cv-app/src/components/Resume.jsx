import React from "react";

const Resume = ({ generalInfo, education, experience }) => {
  return (
    <div className="resume-container">
      <h2>Resume</h2>
      <h3>{generalInfo.name}</h3>
      <p>Email: {generalInfo.email}</p>
      <p>Phone: {generalInfo.phone}</p>
      <h3>Education</h3>
      <ul>
        {education.map((edu, index) => (
          <li key={index}>
            {edu.school} - {edu.degree} ({edu.startDate} to {edu.endDate})
          </li>
        ))}
      </ul>
      <h3>Experience</h3>
      <ul>
        {experience.map((exp, index) => (
          <li key={index}>
            {exp.company} - {exp.position} ({exp.startDate} to {exp.endDate})
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Resume;
