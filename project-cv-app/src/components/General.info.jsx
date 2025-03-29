import React, { useState } from "react";

const GeneralInfo = ({ onGeneralInfoSubmit }) => {
  const [generalInfo, setGeneralInfo] = useState({
    name: "",
    email: "",
    phone: "",
  });

  const handleChange = (e) => {
    setGeneralInfo({ ...generalInfo, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    onGeneralInfoSubmit(generalInfo); 
  };

  return (
    <div className="general-info-container">
      <h2>General Information</h2>
      <form onSubmit={handleSubmit}>
        <label>
          Name:
          <input
            type="text"
            name="name"
            value={generalInfo.name}
            onChange={handleChange}
          />
        </label>
        <label>
          Email:
          <input
            type="email"
            name="email"
            value={generalInfo.email}
            onChange={handleChange}
          />
        </label>
        <label>
          Phone:
          <input
            type="text"
            name="phone"
            value={generalInfo.phone}
            onChange={handleChange}
          />
        </label>
        <button type="submit">Save</button>
      </form>
    </div>
  );
};

export default GeneralInfo;
