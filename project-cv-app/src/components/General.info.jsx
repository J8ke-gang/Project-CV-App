import { useState } from "react";
import InputField from "./InputField";

const GeneralInfo = () => {
    const [GeneralInfo, setGeneralInfo] = useState({
        name:"",
        email:"",
        phone:"",
        address:"",
        city:"",
    });

    const handleChange = (e) => {
        const { name, value} = e.target;
        setGeneralInfo((prev) => ({
            ...prev,
            [name]: value,
        }));
    };

    return (
        <div className="general-info">
            <h2>General Information</h2>
            <inputField
            Label="Name:"
            type="text:"
            value={GeneralInfo.name}
            onChange={handleChange}
            name="name"
            />
            <inputField
            Label="Email:"
            type="email:"
            value={GeneralInfo.email}
            onChange={handleChange}
            name="email"
            />
            <inputField
            Label="Phone:"
            type="text:"
            value={GeneralInfo.phone}
            onChange={handleChange}
            name="phone"
            />
            <div className="summary">
                <h3>Summary</h3>
                <p><b>Name</b>{GeneralInfo.name}</p>
                <p><b>Email</b>{GeneralInfo.email}</p>
                <p><b>Phone</b>{GeneralInfo.phone}</p>
         </div>
   </div>
    );
};

export default GeneralInfo;
