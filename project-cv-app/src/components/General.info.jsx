import React, { useState } from "react";

const GeneralInfo = ({ onGeneralInfoSubmit }) => {
  const [generalInfo, setGeneralInfo] = useState({
    name: "",
    email: "",
    phone: "",
  });

  //handle change
  const handleChange = (e) => {
    setGeneralInfo({ ...generalInfo, [e.target.name]: e.target.value });
  };

  //handle delete
  const handleDelete = () => {
    setGeneralInfo({
      name: "",
      email: "",
      phone: "",
    });
  };

  //handle submit
  const handleSubmit = (e) => {
    e.preventDefault();
    onGeneralInfoSubmit(generalInfo);
  };

  return (
    <div className="general-info-section">
      <h2>General Information</h2>
      <form onSubmit={handleSubmit}>
        <label htmlFor="name">Name:</label>
        <input
          id="name"
          type="text"
          name="name"
          placeholder="Enter Name"
          value={generalInfo.name}
          onChange={handleChange}
        />

        <label htmlFor="email">Email:</label>
        <input
          id="email"
          type="email"
          name="email"
          placeholder="Enter Email"
          value={generalInfo.email}
          onChange={handleChange}
        />

        <label htmlFor="phone">Phone:</label>
        <input
          id="phone"
          type="text"
          name="phone"
          placeholder="Enter Phone #"
          value={generalInfo.phone}
          onChange={handleChange}
        />

        <div className="button-container">
          <button className="submit-button" type="submit">
            Save
          </button>
          <button
            className="delete-button"
            type="button"
            onClick={handleDelete}
          >
            Delete
          </button>
        </div>
      </form>
    </div>
  );
};

export default GeneralInfo;
